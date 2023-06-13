const router = require("express").Router();
//  module de lacement des processus en expressjs

const { spawn } = require("child_process");
const { performance } = require("perf_hooks");

router.post("/transcribe", (req, res) => {
  const { inputVideoPath, filename } = req.query;

  const transcriptionPath =
    "C:/Users/MSI/Desktop/e-learning platform/front/public/uploads/transcriptions/";
  const command = "whisper";
  const model = "base";
  const args = [
    "--model",
    model,
    inputVideoPath,
    "--output_format",
    "json",
    "-o",
    transcriptionPath,
  ];

  // run whisper for transcription
  const startTime = performance.now();

  const transcriptionProcess = spawn(command, args);

  transcriptionProcess.stdout.setEncoding("utf8");
  
  // lancement de la transcription
  transcriptionProcess.stdout.on("data", (data) => {
    const elapsedTime = ((performance.now() - startTime) / 60000).toFixed(2);
    console.log(`Transcription finished in ${elapsedTime} minutes`);
    res
      .status(200)  
      .json({
        transcriptionPath: "/uploads/transcriptions/"+filename.split(".")[0]+".json",
        durationTranscription: elapsedTime,

      });
  });
});

module.exports = router;

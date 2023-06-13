
const htmlTemplateGenerated= ({coursePoster,courseName,lessonName,transcription})=> {
    return `<!DOCTYPE html>
    <html>
    <head>
      <style>
        /* CSS styles for the printable PDF */
        @media print {
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
          }
          
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          
          h1 {
            font-size: 24px;
            margin: 0;
            color: #333;
          }
          
          h2 {
            font-size: 20px;
            margin-top: 5px;
            margin-bottom: 10px;
            color: #555;
          }
          
          .transcription {
            margin-bottom: 20px;
          }
          
          p {
            font-size: 14px;
            line-height: 1.4;
            color: #666;
          }
          
          .date {
            text-align: right;
            font-size: 14px;
            color: #777;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${courseName}</h1>
      </div>
      
      
      
      <div class="lesson">
        <h2>${lessonName}</h2>
        
        <div class="transcription">
          <p>${transcription}</p>
        </div>
        
        <div class="date">
          <p>Date: <span id="currentDate"></span></p>
        </div>
      </div>
      
      <script>
        // JavaScript to display current date
        var today = new Date();
        var currentDate = today.toLocaleDateString('en-US');
        document.getElementById('currentDate').textContent = currentDate;
      </script>
    </body>
    </html>
    `
}

const pdf= require("html-pdf")


const createpdf = (req,res)=> {
  pdf.create(htmlTemplateGenerated(req.body),{}).toFile("transcription.pdf",(err)=> {
    if(err) {
        res.send(Promise.reject())
    }

    // res.send(Promise.resolve())
    res.send("creted")
  })
}

const fetchPdf = (req,res)=> {
   res.sendFile(`C:/Users/MSI/Desktop/e-learning platform/back/transcription.pdf`)
}

module.exports={fetchPdf,createpdf}
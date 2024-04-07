const express = require('express')
const PDFParser = require('pdf2json')

const app = express()
const port = 3000

app.use(express.json())

app.post('/pdf', async (req, res) => {
  const { fileName } = await req.body
  if (!fileName) {
    res.status(400).send('fileName is required')
    return
  }
  const pdfParser = new PDFParser(this, 1)
  const pdfFilePath = `${__dirname}/../resumes/${fileName}`

  pdfParser.on('pdfParser_dataError', (errData) => {
    console.error(errData.parserError)
    res.status(500).send('Failed to parse PDF')
  })

  pdfParser.on('pdfParser_dataReady', () => {
    res.send(pdfParser.getRawTextContent())
  })

  await pdfParser.loadPDF(pdfFilePath)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

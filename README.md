# Resume Analyzer and Grader 📄🤖

This project utilizes a combination of NLP tools and large language models to analyze and grade resumes. The pipeline processes resumes from PDF files, extracts and classifies text information, and grades them based on criteria set by HR standards in the IT industry.

## Features 🌟

- **Resume Text Extraction**: Converts PDF resumes into text. 📑
- **Text Classification**: Uses the LLaMA model to classify extracted text into categories like personal information, experience, education, and skills. 🏷️
- **Resume Grading**: Grades resumes using OpenAI's GPT model based on the classified text. 📊
- **Multi-Model Integration**: Integrates different AI and NLP models to provide comprehensive analysis. 🔧

## Dependencies 📦

This project relies on several external services and libraries:

- **NLTK**: For text processing.
- **Requests**: To make HTTP requests to the local server for text extraction.
- **LangChain**: For using the LLaMA model for text classification.
- **OpenAI**: To access the GPT models for generating grading and summaries.

## Contributing 👥

Contributions to this project are welcome! Please fork the repository and submit a pull request with your proposed changes.

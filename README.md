# Toxic Comment Classification Using BERT

## Overview
This project focuses on classifying toxic comments in five Indian languages: Hindi, Tamil, Telugu, Malayalam, and Kannada. Our team developed a model using BERT (Bidirectional Encoder Representations from Transformers) to identify toxic comments, contributing to healthier online discussions in regional languages.

## Team Members
This project was completed as part of the AI3216 - Natural Language Processing course at Mahindra University, under the guidance of Ms. Nidhi Goyal. The team members are:
- Pramod Reddy
- Vivek
- Saketh
- Ramya
- Bhuvana Kanakam

## Project Setup
We used Google Colab for this project, leveraging its computational resources and GPU acceleration. The following libraries were essential for our work:
- **indic-nlp-library:** For handling tokenization of Indic languages.
- **pandas and numpy:** For data manipulation and analysis.
- **sklearn:** For model evaluation metrics and data preprocessing.
- **nltk:** For additional natural language processing tasks.
- **transformers (Hugging Face):** For utilizing pre-trained BERT models.

## Data Collection and Preparation
We utilized the MACD dataset, which contains 150,000 comments in five target languages, with a balanced distribution of toxic and non-toxic labels (49% abusive, 51% non-abusive). Data preparation involved several steps:
- **Loading Data:** Data was loaded from Google Drive.
- **Creating Stopwords List:** We created a custom stopword list for Hindi, stored in a file named `stopwords.txt`.
- **Tokenization:** Using indic-nlp-library and nltk, we tokenized the text to make it suitable for the BERT model.
- **Splitting Data:** The dataset was split into training and testing sets to evaluate our model's performance accurately.

## Model Training Approaches
We experimented with two approaches:
1. **Traditional Approach:** Implemented a basic text classification model using TF-IDF and Logistic Regression.
2. **Pre-trained Model:** Employed the BertForSequenceClassification model from Hugging Face's transformers library.

### Model Training
For the pre-trained model approach, we followed these steps:
- **Tokenization:** Utilizing BertTokenizer to convert text into tokens understandable by BERT.
- **Model Configuration:** Setting up the BERT model for sequence classification.
- **Training:** Training the model on the prepared dataset using the AdamW optimizer.

## Evaluation
The model's performance was evaluated using accuracy metrics. Predictions were compared against the actual labels to determine the effectiveness in classifying toxic comments.

## Website Interface
To make our model accessible, we developed a simple web interface using HTML and JavaScript. Users can input comments, and the model classifies them as toxic or non-toxic.

![Web Interface](https://bhuvanakanakam.github.io/images/nlp-blog/website.png)

## Conclusion
This project demonstrates the effectiveness of BERT in handling text classification tasks for languages with complex scripts like Hindi. By leveraging modern NLP tools and a robust model, we can significantly enhance the moderation of online platforms.

## Download the Dataset
You can access the dataset used in this project from the following GitHub link: [MACD Dataset](https://github.com/topics/macd-indicator).

## Contact Us
For more details about this project, please reach out to us at [se21ucse035@mahindrauniversity.edu.in](mailto:se21ucse035@mahindrauniversity.edu.in).

## Blog Post
For a detailed blog post about this project, visit [our blog](https://bhuvanakanakam.github.io/blog/hello.html).

## Acknowledgments
We acknowledge support from Mahindra University and the guidance of Ms. Nidhi Goyal. We would also like to thank our team members for their hard work and dedication.

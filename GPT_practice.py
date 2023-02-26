# from pyngrok import ngrok
import streamlit as st
import os
import openai

# ngrok.set_auth_token('2MGBtxPjSimGQTUNNmPYvarbwfz_5hzBVe3M3iGLuQoWPQqed')


st.title('삼일회계법인 Accounting GPT')


apiKey = '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'

openai.api_key = apiKey

n=0
message = st.text_input('무엇을 도와드릴까요? ', key = 'fjasiojfiod'+str(n))
n +=1

response = openai.Completion.create(
                model = 'text-davinci-003',
                prompt = message,
                temperature = 1,
                max_tokens = 200
            )

st.write(response['choices'][0]['text'])



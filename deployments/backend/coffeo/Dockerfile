FROM python:3.12-alpine

ENV LOCAL_DIR=./coffeo/backend

WORKDIR /app

COPY $LOCAL_DIR/requirements.txt /app/requirements.txt
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

COPY $LOCAL_DIR/ .
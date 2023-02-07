# Use an official Python runtime as the base image
FROM python:3.9-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy the requirements.txt file to the container
COPY requirements.txt .

# Install the required packages in the container
RUN pip install -r requirements.txt

# Copy the application code to the container
COPY . .

# Set the environment variable for the container
ENV PYTHONUNBUFFERED 1

EXPOSE 8007
# Run the command to start the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8007"]
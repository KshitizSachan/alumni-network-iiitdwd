pipeline {
    agent any
    environment {
        RENDER_API_KEY = credentials('RENDER_API_KEY') 
        SERVER_SERVICE_ID = 'srv-csoruei3esus73cbgus0'
        CLIENT_SERVICE_ID = 'srv-csot7kl6l47c7395dicg'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'ci/cd_test', url: 'https://github.com/Priyal2403/alumni-network-iiitdwd.git'
            }
        }
        stage('Test Server') {
            steps {
                dir('server') {
                    bat 'npm test'  
                }
            }
        }
        stage('Build Server Image') {
            steps {
                bat 'docker build -t aurum2403/server . -f server/Dockerfile'
                bat 'docker push aurum2403/server'
            }
        }
        stage('Test Client') {
            steps {
                dir('client') {
                    bat 'npm test'  
                }
            }
        }
        stage('Build Client Image') {
            steps {
                bat 'docker build -t aurum2403/client . -f client/Dockerfile'
                bat 'docker push aurum2403/client'
            }
        }
        stage('Deploy Server') {
            steps {
                script {
                    def response = httpRequest(
                        httpMode: 'POST',
                        url: "https://api.render.com/v1/services/${SERVER_SERVICE_ID}/deploys",
                        customHeaders: [[name: 'Authorization', value: "Bearer ${RENDER_API_KEY}"]],
                        quiet: true
                    )
                    echo "Backend Deploy Response: ${response.content}"
                }
            }
        }
        stage('Deploy Client') {
            steps {
                script {
                    def response = httpRequest(
                        httpMode: 'POST',
                        url: "https://api.render.com/v1/services/${CLIENT_SERVICE_ID}/deploys",
                        customHeaders: [[name: 'Authorization', value: "Bearer ${RENDER_API_KEY}"]],
                        quiet: true
                    )
                    echo "Frontend Deploy Response: ${response.content}"
                }
            }
        }
    }
}

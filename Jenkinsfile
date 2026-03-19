pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'space-portfolio'
        DOCKER_TAG   = "${env.BUILD_NUMBER}"
        GITHUB_REPO  = 'https://github.com/priyanshuranjan818/MyPortfolio.git'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: "${GITHUB_REPO}"
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
                    bat 'npm run lint'
                }
            }
        }

        stage('Build Next.js App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} -t ${DOCKER_IMAGE}:latest ."
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                    docker stop space-portfolio-app 2>nul
                    docker rm space-portfolio-app 2>nul
                    FOR /F "tokens=*" %%i IN ('docker ps -q --filter "publish=3000"') DO docker stop %%i
                    FOR /F "tokens=*" %%i IN ('docker ps -a -q --filter "publish=3000"') DO docker rm %%i
                    EXIT /B 0
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                bat "docker run -d --name space-portfolio-app -p 3000:3000 %DOCKER_IMAGE%:latest"
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully! App running at http://localhost:3000'
        }
        failure {
            echo '❌ Pipeline failed. Check the logs above for details.'
        }
        always {
            // Clean up old Docker images to save disk space
            bat 'docker image prune -f || EXIT /B 0'
        }
    }
}

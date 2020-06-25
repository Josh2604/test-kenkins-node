pipeline {
  agent any
  stages {
    stage('Docker Build') {
      steps {
        sh "echo 'Im running'"
      }
    }
}
post {
    success {
      slackSend(message: "Pipeline is successfully completed.")
    }
    failure {
      slackSend(message: "Pipeline failed. Please check the logs.")
    }
}
}
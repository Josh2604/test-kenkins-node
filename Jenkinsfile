pipeline {
  agent any
  stages {
    stage('Docker Build') {
      steps {
        sh "echo 'Im running'"
      }
    }
    stage('Send to integration service') {
      withCredentials([string(credentialsId: 'INTEGRATION_SERVICE', variable: 'INTEGRATION_SERVICE')]){
        withCredentials([string(credentialsId: 'INTEGRATION_KEY', variable: 'INTEGRATION_KEY')]){
          steps {
            sh '''
              curl -X GET $INTEGRATION_SERVICE/test-kenkins-node/INTEGRATION_KEY
            '''
          }  
        }
      }
    }
  }
}

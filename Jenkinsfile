pipeline {
    agent any

    stages {
        stage('Clean') {
            steps {
                echo 'Clean'
                
            }   
        }
		
		stage('Build') {
            steps {
                echo 'Build'
				bat '''d:
                cd D:\\prac_playwright\\prac_pr_ts_slk
                npm test'''
                
            }   
        }
         
    }
}
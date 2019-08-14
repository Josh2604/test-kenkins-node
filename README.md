## Create webapp
az webapp create --resource-group PoseidonResources --plan siapicrossgoP --name nodetest --deployment-container-image-name developmagicservices.azurecr.io/testnode:latest

az webapp config appsettings set --resource-group PoseidonResources --name nodetest --settings PORT="9090"

docker tag testnode:latest developmagicservices.azurecr.io/testnode:latest

docker push developmagicservices.azurecr.io/testnode:latest
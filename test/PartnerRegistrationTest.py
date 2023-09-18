import requests

url = "http://localhost:8080/partner"

PartnerData = {
  "partnerName": "ABC Company",
  "sector": "Tecnologia da Informação",
  "contactEmail": "contato@abccompany.com",
  "contactPhone": "(11)14561-7890",
  "password": "senha123",
  "branch": "São Paulo",
  "representativeJob": "Gerente de Vendas"
}

response = requests.post(url, json=PartnerData)

if response.status_code == 201:
  print("Parceiro criado com sucesso!")
else:
    print("Erro ao criar usuário!")
    print(response.status_code)
    print(response.json())
    
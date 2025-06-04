while True:
    nome=input("Digite seu nome: ").strip()
    idade=input("Digite sua idade: ").strip()
    if nome.replace(' ',' ').isalpha():
       print(f'Olá, {nome}!')
       print(f'Você tem {idade}? TOP')
       break
    else:
        print('Nome não válido')
        print('Idade inválida')


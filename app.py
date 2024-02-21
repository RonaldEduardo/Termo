import json

# Caminho do arquivo txt
arquivo_txt = 'palavras.txt'

# Lendo as palavras do arquivo
with open(arquivo_txt, 'r', encoding='utf-8') as arquivo:
    # Cria uma lista com cada linha (palavra) do arquivo
    lista_de_palavras = [linha.strip() for linha in arquivo]


# Convertendo a lista de palavras em uma string JSON
objeto_js = json.dumps({"palavras": lista_de_palavras}, ensure_ascii=False)

print(objeto_js)

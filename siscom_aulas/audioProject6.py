import numpy as np
import matplotlib.pyplot as plt

def ler_arquivo_txt(caminho_arquivo):
    dados = np.loadtxt(caminho_arquivo, delimiter='\t', skiprows=1)
    tempo = dados[:, 0]
    tensao_normalizada = dados[:, 1]
    return tempo, tensao_normalizada

def quantizar_tensao(tensao_normalizada, num_niveis_quantizacao):
    vmax = np.max(tensao_normalizada)
    vmin = np.min(tensao_normalizada)

    degrau_quantizacao = (vmax - vmin) / (num_niveis_quantizacao - 1)

    niveis_quantizacao = np.linspace(vmin, vmax, num_niveis_quantizacao)

    tensao_quantizada = np.zeros_like(tensao_normalizada)
    for i in range(len(tensao_normalizada)):
        distancias = np.abs(niveis_quantizacao - tensao_normalizada[i])
        indice_min_distancia = np.argmin(distancias)
        tensao_quantizada[i] = niveis_quantizacao[indice_min_distancia]

    return tensao_quantizada

def associar_inteiros(tensao_quantizada):
    valores_unicos = np.unique(tensao_quantizada)
    escala_inteiros = {valor: i for i, valor in enumerate(sorted(valores_unicos))}
    inteiros_associados = np.array([escala_inteiros[valor] for valor in tensao_quantizada])
    return inteiros_associados

def converter_para_binario(numero, m):
    binario = format(numero, f'0{m}b')
    return [int(bit) for bit in binario]

def salvar_arquivo_quantizado(tempo, tensao_quantizada, inteiros_associados, nome_arquivo_txt_quantizado):
    # Converter os arrays para o tipo adequado
    tempo = tempo.astype(float)
    tensao_quantizada = tensao_quantizada.astype(float)
    inteiros_associados = inteiros_associados.astype(int)

    # Empacotar os dados em uma estrutura de dicionário para usar o formato do NumPy
    data = {'Tempo (s)': tempo, 'Tensão Quantizada': tensao_quantizada, 'Inteiro Associado': inteiros_associados}

    # Criar um array estruturado do NumPy
    dados_quantizados = np.array(list(zip(tempo, tensao_quantizada, inteiros_associados)),
                                  dtype=[('Tempo (s)', float), ('Tensão Quantizada', float), ('Inteiro Associado', int)])

    # Salvar os dados no arquivo
    np.savetxt(nome_arquivo_txt_quantizado, dados_quantizados, delimiter='\t', header='Tempo (s)\tTensão Quantizada\tInteiro Associado',
               fmt=['%f', '%.18e', '%d'], comments='')

def salvar_sequencia_binaria(binario, nome_arquivo_binario):
    # Salvar a sequência binária em um arquivo separado
    np.savetxt(nome_arquivo_binario, binario, delimiter='\t', fmt='%d', header='Sequência Binária', comments='')

def gerar_grafico(t, v_quantizada, i_associados, num_niveis_quantizacao):
    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8), sharex=True)

    ax1.plot(t, v_quantizada, label=f'Quantização com {num_niveis_quantizacao} níveis')
    ax1.scatter(t, v_quantizada, color='red')  # Pontos de amostragem
    ax1.set_ylabel('Tensão Quantizada')
    ax1.legend()
    ax1.grid(True)

    ax2.plot(t, i_associados, label='Inteiro Associado', color='green')
    ax2.scatter(t, i_associados, color='red')  # Pontos de amostragem
    ax2.set_xlabel('Tempo (s)')
    ax2.set_ylabel('Inteiro Associado')
    ax2.legend()
    ax2.grid(True)

    plt.show()

def main():
    try:
        caminho_arquivo = input("Digite o caminho do arquivo .txt: ")
        num_niveis_quantizacao = int(input("Digite o número de níveis de quantização desejado (até 23): "))
        nome_arquivo_txt_quantizado = input("Digite o nome do arquivo .txt para salvar os dados quantizados: ")
        nome_arquivo_binario = input("Digite o nome do arquivo .txt para salvar a sequência binária: ")

        tempo, tensao_normalizada = ler_arquivo_txt(caminho_arquivo)
        tensao_quantizada = quantizar_tensao(tensao_normalizada, num_niveis_quantizacao)

        # Associar inteiros aos valores de Vi
        inteiros_associados = associar_inteiros(tensao_quantizada)

        # Salvar dados quantizados com inteiros em um arquivo .txt
        salvar_arquivo_quantizado(tempo, tensao_quantizada, inteiros_associados, nome_arquivo_txt_quantizado)

        # Gerar gráfico
        gerar_grafico(tempo, tensao_quantizada, inteiros_associados, num_niveis_quantizacao)

        # Determinar o número de bits m
        m = int(np.ceil(np.log2(np.max(inteiros_associados) + 1)))
        print('o valor de m eh ---->>>>',m)

        # Gerar array binário de forma eficiente
        binario_temp = [converter_para_binario(inteiro, m) for inteiro in inteiros_associados]
        binario = np.concatenate(binario_temp)

        # Plotar o array binário
        plt.figure(figsize=(10, 2))
        plt.step(range(len(binario)), binario, where='mid', color='blue', linewidth=2)
        plt.title('Sequência Binária')
        plt.xlabel('Índice')
        plt.ylabel('Valor')
        plt.show()

        # Salvar a sequência binária em um arquivo separado
        salvar_sequencia_binaria(binario, nome_arquivo_binario)

        print(f"\nOperação concluída! Dados quantizados salvos como {nome_arquivo_txt_quantizado} e sequência binária como {nome_arquivo_binario}")

    except Exception as e:
        print(f"\nErro: {e}")

if __name__ == "__main__":
    main()

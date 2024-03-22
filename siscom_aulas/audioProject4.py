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


def salvar_arquivo_quantizado(tempo, tensao_quantizada, nome_arquivo_txt_quantizado):
    dados_quantizados = np.column_stack((tempo, tensao_quantizada))
    np.savetxt(nome_arquivo_txt_quantizado, dados_quantizados, delimiter='\t', header='Tempo (s)\tTensão Quantizada',
               comments='')


def gerar_grafico(t, v_quantizada, num_niveis_quantizacao):
    plt.figure(figsize=(10, 4))
    plt.plot(t, v_quantizada, label=f'Quantização com {num_niveis_quantizacao} níveis')
    plt.scatter(t, v_quantizada, color='red')  # Pontos de amostragem
    plt.title('Tensão Quantizada')
    plt.xlabel('Tempo (s)')
    plt.ylabel('Tensão Quantizada')
    plt.legend()
    plt.grid(True)
    plt.show()


def main():
    try:
        caminho_arquivo = input("Digite o caminho do arquivo .txt: ")
        num_niveis_quantizacao = int(input("Digite o número de níveis de quantização desejado (até 23): "))
        nome_arquivo_txt_quantizado = input("Digite o nome do arquivo .txt para salvar os dados quantizados: ")

        tempo, tensao_normalizada = ler_arquivo_txt(caminho_arquivo)
        tensao_quantizada = quantizar_tensao(tensao_normalizada, num_niveis_quantizacao)

        # Salvar dados quantizados em um arquivo .txt
        salvar_arquivo_quantizado(tempo, tensao_quantizada, nome_arquivo_txt_quantizado)

        # Gerar gráfico
        gerar_grafico(tempo, tensao_quantizada, num_niveis_quantizacao)

        print(f"\nOperação concluída! Dados quantizados salvos como {nome_arquivo_txt_quantizado}")

    except Exception as e:
        print(f"\nErro: {e}")


if __name__ == "__main__":
    main()

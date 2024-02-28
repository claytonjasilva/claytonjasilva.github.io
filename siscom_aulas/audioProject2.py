import wave
import numpy as np
import matplotlib.pyplot as plt

def ler_arquivo_wav(caminho_arquivo):
    # Abrir o arquivo WAV
    arquivo_wave = wave.open(caminho_arquivo, 'rb')

    # Obter parâmetros do arquivo
    taxa_amostragem = arquivo_wave.getframerate()
    num_frames = arquivo_wave.getnframes()

    # Ler dados do áudio
    sinal_tensoes = np.frombuffer(arquivo_wave.readframes(num_frames), dtype=np.int16)

    # Fechar o arquivo
    arquivo_wave.close()

    return sinal_tensoes, taxa_amostragem

def gerar_grafico_e_salvar_txt(sinal_tensoes, taxa_amostragem, nome_arquivo_txt):
    # Normalizar o sinal
    sinal_normalizado = sinal_tensoes / np.max(np.abs(sinal_tensoes))

    # Criar array de tempo
    tempo = np.arange(0, len(sinal_tensoes)) / taxa_amostragem

    # Gerar gráfico
    plt.figure(figsize=(10, 4))
    plt.plot(tempo, sinal_normalizado)
    plt.title('Sinal de Áudio Normalizado')
    plt.xlabel('Tempo (s)')
    plt.ylabel('Tensão Normalizada')
    plt.grid(True)
    plt.savefig(nome_arquivo_txt.replace('.txt', '.png'))
    plt.show()

    # Salvar dados em um arquivo de texto
    dados = np.column_stack((tempo, sinal_normalizado))
    np.savetxt(nome_arquivo_txt, dados, delimiter='\t', header='Tempo (s)\tTensão Normalizada', comments='')

def main():
    try:
        # Obter informações do usuário
        caminho_arquivo = input("Digite o caminho do arquivo .wav: ")
        nome_arquivo_txt = input("Digite o nome do arquivo .txt para salvar os dados: ")

        # Ler arquivo WAV
        sinal_tensoes, taxa_amostragem = ler_arquivo_wav(caminho_arquivo)

        # Gerar gráfico e salvar dados em um arquivo .txt
        gerar_grafico_e_salvar_txt(sinal_tensoes, taxa_amostragem, nome_arquivo_txt)

        print(f"\nOperação concluída! Gráfico salvo como {nome_arquivo_txt.replace('.txt', '.png')}")

    except Exception as e:
        print(f"\nErro: {e}")

if __name__ == "__main__":
    main()

import wave
import numpy as np
import matplotlib.pyplot as plt
from scipy.fft import fft
from scipy.signal import find_peaks


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


def normalizar_sinal(sinal):
    return sinal / np.max(np.abs(sinal))


def calcular_fft(sinal, taxa_amostragem):
    tamanho_sinal = len(sinal)
    espectro = fft(sinal)
    frequencias = np.fft.fftfreq(tamanho_sinal, 1 / taxa_amostragem)

    # Apenas considerar as frequências positivas
    indices_positivos = frequencias >= 0
    frequencias_positivas = frequencias[indices_positivos]
    espectro_positivo = 2.0 / tamanho_sinal * np.abs(espectro[indices_positivos])

    return frequencias_positivas, espectro_positivo


def encontrar_picos(frequencias, espectro):
    picos, _ = find_peaks(espectro)
    return frequencias[picos], espectro[picos]


def gerar_graficos_e_salvar_txt(sinal_tensoes, taxa_amostragem, nome_arquivo_txt_tempo, nome_arquivo_txt_frequencia):
    # Normalizar o sinal
    sinal_normalizado = normalizar_sinal(sinal_tensoes)

    # Criar array de tempo
    tempo = np.arange(0, len(sinal_tensoes)) / taxa_amostragem

    # Calcular FFT
    frequencias, espectro = calcular_fft(sinal_normalizado, taxa_amostragem)

    # Encontrar picos na FFT
    picos_frequencia, picos_amplitude = encontrar_picos(frequencias, espectro)

    # Gerar gráfico no domínio do tempo
    plt.figure(figsize=(12, 6))

    # Gráfico no domínio do tempo
    plt.subplot(2, 1, 1)
    plt.plot(tempo, sinal_normalizado)
    plt.title('Sinal de Áudio Normalizado no Domínio do Tempo')
    plt.xlabel('Tempo (s)')
    plt.ylabel('Tensão Normalizada')

    # Gráfico no domínio da frequência
    plt.subplot(2, 1, 2)
    plt.plot(frequencias, espectro)
    plt.scatter(picos_frequencia, picos_amplitude, color='red', marker='x', label='Picos')
    plt.title('Espectro de Frequência')
    plt.xlabel('Frequência (Hz)')
    plt.ylabel('Amplitude')

    plt.tight_layout()
    plt.show()

    # Salvar dados em arquivos de texto
    dados_tempo = np.column_stack((tempo, sinal_normalizado))
    dados_frequencia = np.column_stack((frequencias, espectro))

    np.savetxt(nome_arquivo_txt_tempo, dados_tempo, delimiter='\t', header='Tempo (s)\tTensão Normalizada', comments='')
    np.savetxt(nome_arquivo_txt_frequencia, dados_frequencia, delimiter='\t', header='Frequência (Hz)\tAmplitude',
               comments='')


def main():
    try:
        # Obter informações do usuário
        caminho_arquivo = input("Digite o caminho do arquivo .wav: ")
        nome_arquivo_txt_tempo = input("Digite o nome do arquivo .txt para salvar os dados no domínio do tempo: ")
        nome_arquivo_txt_frequencia = input(
            "Digite o nome do arquivo .txt para salvar os dados no domínio da frequência: ")

        # Ler arquivo WAV
        sinal_tensoes, taxa_amostragem = ler_arquivo_wav(caminho_arquivo)

        # Gerar gráficos e salvar dados em arquivos .txt
        gerar_graficos_e_salvar_txt(sinal_tensoes, taxa_amostragem, nome_arquivo_txt_tempo, nome_arquivo_txt_frequencia)

        print(
            f"\nOperação concluída! Gráficos e dados salvos como {nome_arquivo_txt_tempo}, {nome_arquivo_txt_frequencia}")

    except Exception as e:
        print(f"\nErro: {e}")


if __name__ == "__main__":
    main()

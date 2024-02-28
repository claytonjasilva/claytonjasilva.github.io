import sounddevice as sd
import wave
import numpy as np
import time


def capturar_audio(tempo_gravacao, taxa_amostragem, nome_arquivo):
    # Configurar parâmetros de gravação
    fs = taxa_amostragem  # taxa de amostragem em Hz
    canais = 1  # número de canais (mono)

    # Capturar áudio
    print("Gravando... Pressione Ctrl+C para encerrar.")
    inicio_gravacao = time.time()
    audio = sd.rec(int(fs * tempo_gravacao), samplerate=fs, channels=canais, dtype=np.int16)
    sd.wait()
    fim_gravacao = time.time()

    # Salvar áudio em um arquivo WAV
    salvar_arquivo_wav(audio, fs, canais, nome_arquivo)

    # Exibir taxa de amostragem
    print(f"\nTaxa de amostragem utilizada: {fs} Hz")

    # Exibir tempo de gravação
    tempo_total = fim_gravacao - inicio_gravacao
    print(f"Tempo total de gravação: {tempo_total:.2f} segundos")


def salvar_arquivo_wav(audio, fs, canais, nome_arquivo):
    # Criar objeto wave
    arquivo_wave = wave.open(nome_arquivo, 'w')

    # Configurar parâmetros do arquivo
    arquivo_wave.setnchannels(canais)
    arquivo_wave.setsampwidth(2)  # 2 bytes para representar cada amostra de áudio (int16)
    arquivo_wave.setframerate(fs)

    # Converter para array de bytes e escrever no arquivo
    audio_bytes = audio.tobytes()
    arquivo_wave.writeframes(audio_bytes)

    # Fechar o arquivo
    arquivo_wave.close()


def main():
    try:
        # Obter informações do usuário
        nome_arquivo = input("Digite o nome do arquivo (sem extensão .wav): ") + ".wav"
        diretorio = input("Digite o diretório onde deseja salvar o arquivo: ")
        tempo_gravacao = float(input("Digite o tempo de gravação em segundos: "))
        taxa_amostragem = int(input("Digite a taxa de amostragem desejada (ex: 44100): "))

        # Construir o caminho completo do arquivo
        caminho_arquivo = f"{diretorio}/{nome_arquivo}"

        # Capturar e salvar áudio
        capturar_audio(tempo_gravacao, taxa_amostragem, caminho_arquivo)

        print(f"\nGravação concluída! Áudio salvo em {caminho_arquivo}")

    except KeyboardInterrupt:
        print("\nGravação interrompida pelo usuário.")


if __name__ == "__main__":
    main()

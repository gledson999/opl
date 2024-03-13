# Jogos no USB

O Open PS2 Loader 1.0.0 suporta o tipo de dispositivos de armazenamento USB com até 2 TB (limite máximo).  
Seu dispositivo deve ter apenas uma partição e ser formatado em FAT32.
Seus jogos devem estar no formato USBExtreme com uma ferramenta específica ou até mesmo no formato \*.iso (imagem de disco ISO9660).

**Observação:** Não use dispositivos USB da marca Kingston em geral - corrupções e perdas de dados serão frequentes.

![](./gfx/usb.png#center)

## *Formatando seu dispositivo USB:*

Atualmente, apenas o formato do sistema FAT32 é usado para os jogos no USB. O método recomendado é primeiro formatar seu dispositivo USB com o Windows para sistema de arquivos NTFS para garantir que você tenha uso total do espaço da unidade, depois formatá-lo novamente para FAT32 antes de instalar qualquer jogo.
Você precisa acessar a ferramenta de gerenciamento de disco do Windows para poder formatar seu dispositivo USB. Leia [aqui](https://www.lifewire.com/how-to-open-disk-management-2626080) para descobrir como fazer isso de acordo com o seu sistema operacional. Em alguns sistemas operacionais, você também pode acessá-lo clicando com o botão direito do mouse no dispositivo USB no Windows Explorer. Se você for questionado sobre o tamanho das alocações durante o processo, deixe-os como padrão. Agora que seu dispositivo USB está formatado em FAT32, você estará pronto para instalar seus jogos PS2.

## *Instalando os jogos do PS2:*

Antes de instalar seus jogos do PS2 em seu dispositivo USB, você precisa fazer uma imagem deles usando seu software favorito (você pode usar o [ImgBurn](https://imgburn.com/) para isso). Você também precisa criar uma pasta de CD e DVD na raiz do seu dispositivo USB.

O OPL suporta ambos os formatos do USBExtreme `ul.xxxxxxx` ou no formato de `.iso`. O método de instalação dependerá do tamanho da imagem do jogo.

* **Tamanho dos jogos de PS2 menores que 700MB:** Você pode colocar esses jogos em formato de .iso na pasta `CD` do seu OPL `mass:/CD`. Lembre-se que você também pode convertê-los para o formato do USBExtreme. Lembre-se também que você **NÃO PRECISA** mais renomeá-los usando a sintxe antiga <ID_do_Jogo>.Nome do jogo.iso (Exemplo : SLES_544.39.Okami.iso) que foi introduzida no OPL 0.8, embora ele ainda aceite esse formato.

* **Tamanho dos jogos de PS2 maiores que 700MB, mas menores que 4GB:** Você pode colocar esses jogos em formato de .iso na pasta `DVD` do seu OPL `mass:/DVD`. Lembre-se que você também pode convertê-los para o formato do USBExtreme. Lembre-se também que você **NÃO PRECISA** mais renomeá-los usando a sintxe antiga <ID_do_Jogo>.Nome do jogo.iso (Exemplo : SLES_544.39.Okami.iso) que foi introduzida no OPL 0.8, embora ele ainda aceite esse formato.

* **Tamanho dos jogos de PS2 maiores que 4GB:** Devido as limitações do sistema FAT32, você vai **PRECISAR** converter seus jogos que estão em iso para o formato do USBExtreme. Ele será cortado em várias partes (ul.xxxxxxx1, ul.xxxxxxx2, etc) que será compatível com as limitações do sistema do FAT32. Você também poderá diminuir o tamanho da sua .iso (removendo os arquivos dummies caso estejam presentem na imagem) para ter um tamanho menor que 4GB.

**Observação:** De acordo com o arquivo <span style="color: lawngreen">supportbase.h</span> do código fonte, o tamanho máximo do nome nos jogo devem ser respeitados, sendo assim:

* `#define UL_GAME_NAME_MAX 32`: Jogos no formato USBExtreme não pode ultrapassar 32 caracteres.
* `#define ISO_GAME_NAME_MAX 64`: Jogos no formato ISO não pode ultrapassar 64 caracteres.

A ferramenta de instalação compatível com o formato USBExtreme é o [USBUtil 2.2](https://www.psx-place.com/attachments/usbutil_v2-2_rev1-0_en-english-7z.12773/).  
Você pode encontrar um guia completo sobre isso [aqui](https://www.psx-place.com/attachments/tutorial-usbutil-2-0-zip.12775/).

## *Modo USB do Open PS2 Loader:*

Você precisa habilitar o dispositivo USB antes de usá-lo. No menu do OPL, vá nas Configurações e defina o <span style="color: lawngreen">modo de início no USB</span> como `Manual` ou `Automático`. Agora você conseguirá acessar a página de jogos no USB. Mas se você habilitou o dispositivo e se seus jogos do PS2 não estão sendo exibidos na página, existem algumas coisas possíveis que você deve verificar:

* Seu dispositivo USB não está formatado em FAT32.
* Se você usou o formato USBExtreme, eles podem não ter sido instalados corretamente.
* se você usou o formato USBExtreme, o arquivo ul.cfg deve estar ausente ou corrompido (corrija-o usando sua ferramenta de instalação compatível com o formato USBExtreme).
* Seu dispositivo USB está danificado, queimado ou até mesmo incompatível.

## *Desfragmentação:*

Os jogos no USB devem estar sem fragmentação para funcionar corretamente. Ações como copiar, excluir e mover arquivos causará fragmentação da estrutura dos arquivos do dispositivo e os programas de instalação irão instalar os arquivos do jogo em qualquer espaço disponível. Isso pode causar vários problemas, seus jogos causarão problemas no seu funcionamento ou até mesmo não funcionar.

Você pode usar o [Auslogics DiskDefrag](https://www.auslogics.com/en/software/disk-defrag/) para fazer a desfragmentação do seu dispositivo. Usar o programas de desfragmentação do Windows ou PowerDefragmenter não é muito recomendado. **Observação:** O OPL irá notificá-lo se seus jogos estão fragmentados. Nas versões anteriores você poderia ativar ou desativar a opção de verificação de fragmentação no menu de configurações, mas devido a vários conflitos e muitas pessoas estarem na dúvida, a opção foi removida definitivamente e por padrão o OPL só vai executar os jogos se eles estiverem sem fragmentação, é recomendado para dispositivos menores a formatação ao invés de desfragmentação.

<hr>

# [**Índice**](./index.html)
<button class="index-button">INDEX</button>

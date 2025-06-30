namespace palettes {
    //% fixedInstance
    export const Cool_Colors = hex`00000016171a7f0622d62411ff8426ffd100fafdffff80a4ff267494216a43006723497568aed4bfff3c10d275007899002859`;
}
namespace projectImages {
    //% fixedInstance
    export const mosaic = image.ofBuffer(hex`e4101000dddddddddddddddd5d55454444eeeede5d55646666e4eede5d4566666646eede5d6466666666e4de4d666688686646de4d668688886646de4d668628886646dd4d668688886646d94d666688686646d9dd646666666694d9dd4d6666664699d9dddd6466669499d9dddd4d44449999d9dddddddd999999d9dddddddddddddddd`);
}
color.setPalette(color.bufferToPalette(palettes.Cool_Colors))
console.log("width: " + projectImages.mosaic.width + " height: " + projectImages.mosaic.height)
scene.setBackgroundImage(projectImages.mosaic)

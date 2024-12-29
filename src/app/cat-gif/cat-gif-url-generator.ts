const catGifs = [
    "https://static.wixstatic.com/media/55e07c_8fd61ae6282240f79df92c41fe223dee~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_f7cbe32d6cf64f08bb66df048b71f965~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_a48c14de8da54dfca4f7fb9b200288ab~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_1eeefceb0d764f998f52b846a8c7981e~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_1387d7cce5a04e53819b3c8d0c4f6021~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_031596fa7337402790c0307191b81061~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_c0133f6035c1421591caacf02dc7fa75~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_2c0d634e86ff42f0b05d39e747c47c53~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_c25157031d04467ab644aa64c667590c~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_5d9bf6d55b4d403da1aa01bd7d105db4~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_ab97f756b20e4d92bbde9cff2459f697~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_e1d1acfa431847d591585aaa1bc8e896~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_64ce10e0525246c6981028bbf8298f74~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_7998b9af159a47639ab315ef70e69ba9~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_99fe779679564ed0ac19faaefdedfb08~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_55e3b4fa3cda467f949475a41d3d81e4~mv2.gif",
    "https://static.wixstatic.com/media/55e07c_9e071910f7de4effadde868975506180~mv2.gif"
]

export class catGifsUrlGenerator {
    static generate(){
        const gifCount = catGifs.length;
        const index = Math.round(Math.random() * (gifCount-1) + 1);
        return catGifs[index];
    }
}
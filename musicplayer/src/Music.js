import React, { Component, useState } from 'react';

export default function Playlist() {
    const trax = [{ name: "Reece_Madlisa_Zuma_-_Jazzidisciples_Zlele_feat_Mr_JazziQ_Busta", track: 'https://zuluja.xyz/file/music/2020/07/Reece_Madlisa_Zuma_-_Jazzidisciples_Zlele_feat_Mr_JazziQ_Busta_929_(Afrobeat.Co.Za).mp3' }, { name: "Mr_JazziQ_Busta_929_Ft_Reece_Madlisa_Zuma_Mpura_Riky_Rick_-_VSOP", track: 'https://zuluja.xyz/file/music/2020/09/Mr_JazziQ_Busta_929_Ft_Reece_Madlisa_Zuma_Mpura_Riky_Rick_-_VSOP_(Afrobeat.Co.Za).mp3' }, { name: "TallArseTee_ft_Busta_929_Dj_Papers_707_-_Ngwanona", track: 'https://zuluja.xyz/file/music/2020/08/TallArseTee_ft_Busta_929_Dj_Papers_707_-_Ngwanona_(Afrobeat.Co.Za).mp3' }, { name: "MFR Souls - Amanikiniki (Official Video) ft. Major League Djz, Kamo Mphela & Bontle Smith", track: 'https://tti.ffjjti.frl/63b5facc54ab185cf8ba2974c2201ea1/r3UVw_SZbMs/cuownawenmwoo.mp3' }, { name: "JazziDisciples & Mr JazziQ Askies ft. Josiah De Disciple, FakeLove, Moonchild Sanelly & MDU", track: 'https://tti.ffjjti.frl/303ff5314ba5882bc5590e46a04068a8/OZ3ZD_H49PE/cuoznazenmzoo.mp3' }, , { name: "Jazzi Disciples ft Vigro deep - Blue Skies", track: 'https://itt.ffjjti.frl/5179f8be93ac506f64002043d5e656d8/O2B-b2QxQQk/cuoxnaxenmxoo.mp3' }];
    const [songs, stestate] = useState(trax);

    const play = (song) => {
        console.log("song", song);
        var audio = new Audio(song);
        audio.play();

    };
    return (
        <div>
            {songs.map((song) => {
                return <div className={"two-column"}>
                    <div>
                        <label>{song.name}</label>
                    </div>
                    <div>
                        <button onClick={() => play(song.track)}><i class="fa fa-play"></i></button>
                        <button onClick={() => play(song.track)}><i class="fa fa-pause"></i></button>
                        <button onClick={() => play(song.track)}><i class="fa fa-fast-forward"></i></button></div>
                    </div>
            })}
        </div>
    );
}
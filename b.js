function autoRelated(data) {
    var out = data[1];
    var dom = ''; // Inisialisasi variabel dom sebagai string kosong

    for (var i = 0; i < out.length; i++) {
        var kw = out[i];
        dom += `<section>
                    <article>
                        <figure>
                            <img alt="${kw} - related content" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" 
                                 width="320" height="320" loading="lazy" 
                                 style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" />
                            <figcaption><small>Title: <i>${kw}</i></small></figcaption>
                        </figure>
                        <h3>
                            <a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a>
                        </h3>
                        <p align="justify">
                            <b>${kw}</b> adalah salah satu hasil terbaik untuk kueri pencarian Anda <b>${postTitle}</b>. 
                            Konten yang disediakan di sini hanya untuk tujuan referensi. Anda disarankan untuk menyimpan dan menandai informasi pada <b>${kw}</b> 
                            untuk penggunaan di masa depan. Kami berharap ini menjadi sumber yang berharga bagi kebutuhan Anda.
                        </p>
                    </article>
                </section>`;
    }
    // Misalnya Anda ingin memasukkan ini ke dalam DOM
    document.getElementById('related-content').innerHTML = dom;
}

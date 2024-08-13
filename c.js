function autoRelated(data) {
    var out = data[1];
    var dom = ''; // Inisialisasi variabel dom sebagai string kosong

    for (var i = 0; i < out.length; i++) {
        var kw = out[i];
        dom += `<aside>
                    <img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" 
                         width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" />
                    <small>Title: <i>${kw}</i></small>
                    <h3>
                        <a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a>
                    </h3>
                    <p align="justify">
                        <b>${kw}</b> is among the best results for your search query <b>${postTitle}</b>. 
                        The content provided here is purely for reference purposes. You are encouraged to save and bookmark the information on <b>${kw}</b> 
                        for future use. We hope this serves as a valuable resource for your needs.
                    </p>
                </aside>`;
    }

    // Memasukkan konten yang dihasilkan ke dalam elemen dengan id 'related-content'
    document.getElementById('related-content').innerHTML = dom;
}

document.getElementById('btn').addEventListener('click', (e) => {
  printJS({
    printable: [
      'https://storage.googleapis.com/documents-test/080d3863-2136-473b-9f73-0f68bad179f5%2Fc443339e-d80e-44a7-9ab5-cf98cea6f9c4?GoogleAccessId=service-document-test%40fcg-dev.iam.gserviceaccount.com&Expires=1686285981&Signature=nOC0q9iGrQwXoCY2seBwndsnyuGS93P%2Fl4Flu68RZD%2FwcP8SANgb%2BiasN0UzPQMHSdwsAMaGTx6Ekh%2F5C5ByEmhUee5pPNLOmQKLaq3yMxkYNSbz2EfV2iDqhQ%2Fa5Qp%2F4lbyixlrrVwJojLTVEJzIXuESz%2Fw0j9Bh2lYXO7MRFm5F85AZSUPotSR%2BWtP29byOwh01MR7X4hvRHXfRE8pckLdS%2FG8pWqCA60NfGYZbN%2FAjHQsvKsFF6yjBEN7DRJYuJAP236svmGoYp3%2BuLpiohHRG%2FixjXjpywtUq6VlTPWFGxxMAQUisfWS%2B4tnyagSylC1kQdf5DFDWQC5wfuyMg%3D%3D&response-content-disposition=attachment%3B%20filename%3D%22saleTokenReceipt.pdf%22%3B',
    ],
    type: 'pdf',
    header: 'Multiple Images',
    imageStyle: 'width:50%;margin-bottom:20px;',
  });
});

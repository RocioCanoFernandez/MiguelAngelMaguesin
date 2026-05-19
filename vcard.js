
function generateVCard() {
  const hubUrl = "https://hub-hub-miguel-labcheap.npfusf.easypanel.host/";
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:${'Miguel Ángel Maguesin'};;;;
FN:${'Miguel Ángel Maguesin'}
ORG:LabCheap
TITLE:${'Dirección'}
TEL;TYPE=WORK,VOICE:${'650717741'}
TEL;TYPE=CELL,VOICE:${'650717741'}
EMAIL;TYPE=WORK,INTERNET:${'direccion@labcheap.es'}
URL:https://www.labcheap.es
URL;TYPE=HUB:${hubUrl}
ADR;TYPE=WORK:;;Calle Zoología, 48, esquina con Calle Sociología, Parque Empresarial Nuevo Torneo;Sevilla;;41015;España
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Miguel_Ángel_Maguesin_LabCheap.vcf');
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

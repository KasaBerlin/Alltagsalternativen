import React,{useEffect,useState} from "react";
import $ from "jquery";

const Zwei = () => {
const [slideIndex, setIndex] = useState(1);
  
useEffect(()=>{
    slide()
})

function slide() {
    let box = $(".box");
    let i;
    for (i = 0; i < box.length; i++) {
      if(slideIndex === -1){
        if(box.eq(i).hasClass("slide-in-right"))
        {box[i].classList.replace("slide-in-right","slide-in-left")}
        else box.eq(i).addClass("slide-in-right")}
      else if (slideIndex === 1){
        if(box.eq(i).hasClass("slide-in-left"))
        {box[i].classList.replace("slide-in-left","slide-in-right")}
        else box.eq(i).addClass("slide-in-left")
      } 
      box.eq(i).css("display", "none")
  }
  box.eq(slideIndex-1).css("display","block") 
}

function showModal(){
let modal = $("#myModal");
modal.css("display","block");

let close = $(".close");
close.click( ()=>{
  modal.css("display","none");
})

$("window").click(e=>{
  if (e.target === modal) {
    modal.css("display","none")
  }
})
}

return (
  <React.Fragment>
    <div className="textbox">
      <h2>Zwei geschlechtlichkeit?</h2>
      <article className="text">
        Zweigeschlechtlichkeit ist eine Konstruktion, die unseren Alltag
        grundlegend durchzieht und strukturiert. Die Annahme, dass es
        "natürlicherweise" zwei Geschlechter gäbe, ist in unserer Gesellschaft
        so verwurzelt, dass Menschen immer wieder gerne, fast ein bisschen
        verzweifelt, behaupten: "Es gibt doch aber nunmal zwei Geschlechter!"
        <p className="linkstyle" onClick={() => showModal()}>Ein Gespräch...!</p>
      </article>
    </div>
    <div id="myModal" className="modal">
        <nav className="modal-nav">
    <i class="close fas fa-times-circle"></i>
    <i className="fas fa-arrow-circle-left left" onClick={() => setIndex(slideIndex-1)}/>
    <i className="fas fa-arrow-circle-right right" onClick={() => setIndex(slideIndex+1)}/>
    </nav>
      <div id="clickBox" className="modal-content">
      <article className="box sb1">
        "Es gibt doch aber nunmal 2 Geschlechter! Männer und Frauen, die in
        ihrem Wesen verschieden sind!"
      </article>
      <article className="box color2 sb2">"Inwiefern verschieden?"</article>
      <article className="box sb1">
        "Na, dass Männer zum Beispiel mehr mit Technik am Hut haben, und Frauen
        mehr mit Kommunikation und so."
      </article>
      <article className="box color2 sb2">
        "Was sind denn Männer und Frauen?"
      </article>
      <article className="box sb1">"Wie jetzt?"</article>
      <article className="box color2 sb2">
        "Also woran machst du das fest, ob jemand Mann oder Frau ist?"
      </article>
      <article className="box sb1">
        "Na an den Genitalien, das ist doch eindeutig."
      </article>
      <article className="box color2 sb2">
        "Aber selbst dann gibt es mehr als zwei Geschlechter, gibt ja genügend
        Menschen, die nicht mit eindeutig männlichen oder weiblichen Genitalien
        geboren werden."
      </article>
      <article className="box sb1">"Aber das sind doch Ausnahmen!"</article>
      <article className="box color2 sb2">
        "Naja, immerhin etwa 4 Prozent aller Menschen.
      </article>
      <article className="box sb1">"Tatsächlich?"</article>
      <article className="box color2 sb2">"Ja."</article>
      <article className="box sb1">
        "Okay, aber sprechen wir doch von den anderen, die also mit
        'eindeutigen' Genitalien geboren werden - dann ist doch klar, die einen
        sind also Männer, die anderen Frauen."
      </article>
      <article className="box color2 sb2">
        "Und die Genitalien bestimmen also das Wesen eines Menschen, oder wie?"
      </article>
      <article className="box sb1">
        "Naja, nein, aber damit hängt ja wieder viel mehr zusammen: Die
        Chromosomen zum Beispiel, XX oder XY. Die Bewirken dann die Ausbildung
        von Genitalien, das Aussehen und schließlich die Hormone, und die wirken
        sich wiederum auf das Wesen eines Menschen aus."
      </article>
      <article className="box color2 sb2">
        "Du hast Recht, in unserer Gesellschaft wird Geschlecht an all diesen
        Dingen festgemacht: Chromosomen, Genitalien, Aussehen, sogar Stimmlage,
        und wird schließlich noch über Hormone begründet. Aber wie kommst du
        darauf, dass das alles immer zusammen hängt? Schließlich gibt es
        Menschen, deren äußeres Erscheinungsbild nicht ihrem gonadalen
        Geschlecht entspricht oder gar nicht 'eindeutig' 'männlich' oder
        'weiblich' ist, oder Menschen, deren Stimmlage wiederum nicht zu ihrem
        Aussehen zu 'passen' scheint. Und schließlich gibt es auch Menschen,
        deren äußere Geschlechtsmerkmale nicht mit den Chromosomen einhergehen,
        zum Beispiel XY-Frauen, die trotz 'männlichem' Chromosomensatz oft eine
        weibliche Erscheinung haben."
      </article>
      <article className="box sb1">"Echt?"</article>
      <article className="box color2 sb2">
        "Ja. Es gibt also verschiedene Faktoren, die Geschlecht ausmachen, die
        aber völlig gegenläufige Ergebnisse haben können."
      </article>
      <article className="box sb1">
        "Wenn also all diese Merkmale auf eine bestimmte Art und Weise
        zusammenspielen müssen, damit wir auf, sagen wir 'biologische Art und
        Weise' einen Menschen einem von zwei Geschlechtern zuordnen können -
        dann sind ja die wenigsten Menschen so eindeutig zuordenbar!"
      </article>
      <article className="box color2 sb2">
        "Ja, vielmehr scheint es auch biologisch eine Vielfalt von Geschlechtern
        zu geben, bzw. sind die Grenzen zwischen den klassischen
        Geschlechterkategorien fließend."
      </article>
      <article className="box sb1">"Hm."</article>
      <article className="box color2 sb2">
        "Aber denken wir doch weiter. Anhand von nicht haltbaren, nur scheinbar
        biologischen Kategorien, haben wir auch gesellschaftlich eine
        zweigeschlechtliche Norm aufgemacht - genau zwei Geschlechter nehmen wir
        im Alltag wahr und schreiben ihnen bestimmte Eigenschaften zu, zum
        Beispiel seien 'Männer' aggressiver, 'Frauen' hingegen emotionaler.."
      </article>
      <article className="box sb1">
        "Wenn wir aber nun bedenken, dass Geschlecht gar keine so klare Sache
        ist, dass also auch Hormone, die ja immer für Verhaltenszuschreibungen
        herangezogen werden, demnach eben so uneindeutig zwei und nur zwei
        'Geschlechtern' zugeordnet werden können ...."
      </article>
      <article className="box color2 sb2">
        "Ja, dann verliert alles seine Einfachheit. Mir hat mal jemand gesagt:
        "Hüte dich vor Menschen, die dir einfache Erklärungen für komplexe
        Realitäten anbieten.""
      </article>
      <article className="box sb1">"Hm.."</article>
      <article className="box color2 sb2">
        "Aber das Problem ist ja, dass wir diese zwei vereinfachten Kategorien,
        die wir da konstruiert haben, sich selbst bestätigen lassen: Wie
        reagieren wir zum Beispiel auf eine aggressive, laute Person, die wir
        aber als 'Frau' sehen, und die sich vielleicht auch selbst so sieht? Wir
        erkennen nicht, dass an unseren Kategorien, unseren
        Geschlechtszuschreibungen was falsch sein muss, sondern wir behaupten
        einfach, die Person sei "unweiblich" ..."
      </article>
      <article className="box sb1">
        "Wie perfide! Wir behaupten einfach, der Mensch sei falsch, nicht die
        Zuschreibung."
      </article>
      <article className="box color2 sb2">
        "Und da behaupte nochmal jemand, Zweigeschlechtlichkeit und Rollenbilder
        seien 'natürlich'.. Vielmehr sollten wir darüber nachdenken, welche
        Rolle Sozialisation bei all dem spielt."
      </article>
    </div>
    </div>
    </React.Fragment>
)};

export default Zwei;

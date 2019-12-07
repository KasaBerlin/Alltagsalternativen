import React,{useEffect} from "react";
import $ from "jquery";

function Ifaqs() {

useEffect(()=>{
  $(".panel").hide();
  let acc = $(".accordion"); 
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", e => {
      $(e.target).next().slideToggle("slow");
      $(e.target).find("i").toggleClass("fa-angle-double-up", "fa-angle-double-down");
    })
    }})

return(<React.Fragment>
    <div className="textbox">
      <h2>GENDER IFAQ‘s (infrequently asked questions)</h2>
      <article className="text">
        Infrequently asked questions - Fragen, die viel zu selten über Gender
        gestellt werden, und die helfen, die Tragweite von Sexismus zu erkennen.
        Wenn ihr die Fragen anklickt, landet ihr bei kleinen Texten, die um
        verschiedene Realisierungsformen von Sexismus gehen - aber weil sie
        aufeinander aufbauen, lohnt es sich, sie der Reihenfolge nach zu lesen ;
      </article>
    </div>
    <div>
      <button className="accordion">
        <i className="fas fa-angle-double-down"></i>
        Warum müssen Neugeborene in Deutschland Namen bekommen, die eindeutig
        „männlich“ oder „weiblich“ zugeordnet werden können?
      </button>
      <div className="panel">
        <p>
          Sexismus beginnt grundlegend mit der Unterscheidung von Menschen in
          zwei und nur zwei (hierarchisierte) Geschlechter und der Annahme, dass
          Menschen nach einem Entweder-oder-Modell einem dieser Geschlechter
          eindeutig zugeordnet werden könnten. Obwohl Zweigeschlechtlichkeit
          auch biologisch nicht richtig ist, wird diese Norm oft biologistisch
          erklärt. Eines dieser beiden konstruierten Geschlechter wird bereits
          bei der Geburt festgelegt und oft gewaltsam durchgesetzt,
          beispielsweise durch operative Eingriffe bei Säuglingen, welche mit
          „uneindeutigen“ Genitalien geboren wurden oder durch den alltäglichen
          Zwang, sich selbst in das zweigeschlechtliche Modell einzuordnen, sei
          es bei öffentlichen Toiletten, bei Formularen, bei was auch immer.
          Diese Konstruktion von Zweigeschlechtlichkeit durchdringt unseren
          Alltag und lässt keine Positionierungen/Identitäten jenseits von
          „männlich“ oder „weiblich“ oder auch jenseits von Geschlecht zu.
        </p>
      </div>
      <button className="accordion">
        <i className="fas fa-angle-double-down"></i>
        Warum gilt es als selbstverständlich, Geschichten zu erzählen, in denen
        die Geschlechtsidentität der Protagonist_innen vom Anfang bis zum Ende
        unverändert bleibt?
      </button>
      <div className="panel">
        <p>
          Zusammenhängend mit der zweigeschlechtlichen Norm wird stetig davon
          ausgegangen, dass das zugeschriebene Geschlecht einer Person auch
          zwangsläufig ihrer Selbstwahrnehmung entspräche, sowie dass die
          Gender-Identifikation einer Person ihr Leben lang gleichbleibend sein
          müsse.
        </p>
      </div>
      <button className="accordion">
        <i className="fas fa-angle-double-down"></i>
        Warum werden fast alle Trailer zu Kinofilmen von Stimmen gesprochen,
        welche als „männlich“ wahrgenommen werden? Und warum ist mir das noch
        nie aufgefallen?
      </button>
      <div className="panel">
        <p>
          Die Konstruktion von Zweigeschlechtlichkeit führt auch zu
          Geschlechterrollen, also der Zuschreibung von Eigenschaften und
          Handlungsweisen. Dabei wird eines der Geschlechter als stark und fähig
          konstruiert, das andere als emotional und schwach. Durch die
          Zuschreibung von Rollen entsteht immer auch eine Hierarchisierung, die
          sich zum Beispiel darin zeigt, dass „Frauen“ häufig sexualisiert
          (dargestellt) werden und als „Männern“ „zur Verfügung stehend“
          dargestellt und oft wahrgenommen werden. Hinzu kommt, dass „Männer“
          universalisiert und als Norm gesetzt werden, eine „männliche“
          Wahrnehmung wird also als neutral und prototypisch für Menschen
          allgemein angesehen. Das zeigt sich zum Beispiel darin, dass
          „Männlichkeit“ meist nicht benannt, sondern als selbstverständlich
          vorausgesetzt wird – nur „Frau“-sein muss besonders markiert werden:
          Zum Beispiel „Fußball“ und „Frauenfußball“. Dies ist eine Strategie
          der Herstellung von Privilegierung von „Männern“ in Bezug auf
          Sexismus. Sie hat sich tief in unsere alltägliche Wahrnehmung
          eingeschrieben – so nehmen zum Beispiel viele Menschen die
          Protagonist_innen einer Geschichte zunächst als irgendwie „männlich“
          wahr, bis diese anders benannt werden. Gleichzeitig sprechen viele
          Medien, die scheinbar neutral an ein „breites Publikum“ gerichtet
          sind, Menschen als „männlich“ an. Übrigens auch als Heter@. Mehr dazu
          im nächsten Absatz.
        </p>
      </div>
      <button className="accordion">
        <i className="fas fa-angle-double-down"></i>
        Warum favorisieren Erbschafts-, Steuer-, und Asylrecht
        institutionalisierte Paarverhältnisse? Warum haben in westlichen
        Gesellschaften Lesben und Schwule ein „Coming-Out“, während Heter@s das
        nicht haben (müssen)?
      </button>
      <div className="panel">
        <p>
          Auf gleiche Art und Weise wie „Männlichkeit“ wird auch
          Heter@sexualität als allgemeinmenschlich universalisiert und stets als
          „normal“ vorausgesetzt, es sei denn, es wird explizit etwas anderes
          gesagt. (Wobei sich auch hierbei verschiedene Ebenen von Sexismus
          bedingen, so werden beispielsweise Schwule mehr wahrgenommen als
          Lesben, werden mehr thematisiert, ernster genommen und sichtbarer
          gemacht.) Dieser Heter@sexismus impliziert gleichzeitig paarnormative
          Vorstellungen sowie normierende Vorstellungen über Sexualität.
        </p>
      </div>
      <button className="accordion">
        <i className="fas fa-angle-double-down"></i>
        Warum wird „Mädchen“ meist selbstverständlich suggeriert, sie würden
        später Ehefrauen und Mütter werden?
      </button>
      <div className="panel">
        <p>
          Sexismus bedeutet auch, dass Menschen über Kinder und Familie
          charakterisiert werden, also zum Beispiel als „verheiratet, kinderlos“
          benannt werden, nicht aber zum Beispiel als „Politgruppenlos, mit
          Haustier“ oder Ähnlichem. Vor allem „Frauen“ werden häufig über
          Familie und Kinder charakterisiert, so als seien dies notwendige Ziele
          im leben und Zeichen von „Gesundheit“. „Frauen“ werden dabei mit
          „Müttern“ gleichgesetzt, so richten sich zum Beispiel Angebote, welche
          bei der Vereinbarkeit von „Familie&Beruf“ helfen sollen, stets an
          „Frauen“. Gleichzeitig beinhalten solche als Norm konstruierten
          Familienverhältnisse die Naturalisierung von zwei Heter@Elternteilen
          sowie Kindern, welche von diesen beiden gezeugt wurden. Andere
          Lebensformen, wie zum Beispiel 3 Freundinnen, welche mit einem
          „adoptierten“ Kind zusammen leben, werden so als nicht wünschenswert
          und „unnormal“ dargestellt und un-denkbar gemacht. „Familie“ wird als
          nicht wählbar dargestellt.
        </p>
      </div>
      <button className="accordion">
        <i className="fas fa-angle-double-down"></i>
        Warum können wir vergessen, wie eine Person heißt, wo sie aufgewachsen
        ist und wann sie Geburtstag hat, nicht aber, ob wir sie als „Mann“ oder
        „Frau“ wahrgenommen haben? Warum scheint es so unvorstellbar, dass es
        keine soziale Einteilung von Menschen in „Frauen“ und „Männer“ gibt,
        dass Menschen „zwischen“ zwei Gendern liegen oder vom einen ins andere
        gewechselt haben?
      </button>
      <div className="panel">
        <p>
          Sexismus konstruiert Geschlecht immer als Bezugsrahmen. Somit wird
          ebenfalls un-denkbar, dass Menschen sich zwischen den 2 anerkannten
          Geschlechtern verorten, sich mit beiden gleichzeitig identifizieren
          oder als ein ganz anderes Geschlecht oder völlig jenseits von
          Geschlecht. Solche Menschen werden in unserer Gesellschaft durch alle
          Realisierungsformen von Sexismus unsichtbar gemacht. Die Vorstellungen
          von Geschlecht und von Zweigeschlechtlichkeit sind so sehr
          normalisiert, dass selbst viele „antisexistische“ Initiativen in sich
          erneut Sexismus reproduzieren: So kommen beispielsweise Quotierungen
          zwar „Frauen“ zugute, allerdings blenden sie Menschen jenseits der
          (zwei anerkannten) Geschlechter erneut aus und zwingen diese, sich in
          das zweigeschlechtliche Muster einzufügen, um teilhaben zu können.
          Dies zeigt letztendlich, dass Sexismus ein vielfältiges Phänomen ist.
          Menschen können unterschiedlich stark durch Sexismus diskriminiert und
          unterschiedlich stark durch Sexismus privilegiert werden, und auch
          Menschen, die in einigen Aspekten sexistisch diskriminiert werden,
          können selbst Menschen in anderen Aspekten (in welchen sie selbst
          anderen gegenüber privilegiert sind) sexistisch diskriminieren.
        </p>
      </div>
    </div>
    <div className="textbox2">
      <h2>Anmerkung</h2>
      <article className="text2">
        Nachdem ihr nun all das gelesen habt, ist uns noch eine Sache wichtig.
        Wir möchten darauf hinweisen, dass Sexismus nicht einfach umkehrbar ist.
        Wenn zum Beispiel „Männer“ mit einer Rollenzuschreibung beleidigt
        werden, so ist das sicher verletzend, und das möchten wir nicht
        absprechen. Allerdings halten wir es für unpassend, in diesem
        Zusammenhang von „Sexismus“ zu sprechen – und diese Beleidigung somit
        gleichzusetzen mit der strukturellen Diskriminierung
        „nicht-männlicher“** Menschen, welche täglich durch Institutionen,
        Medien, Staat und Alltag reproduziert und gefestigt wird, oft als
        „normal“ wahrgenommen wird und häufig nicht einmal der öffentlichen
        Thematisierung für wert befunden wird.
       <br></br>
        ** Wir sind uns der Problematik bewusst, dass wir mit der Bezeichnung
        „nicht männlich“ eine große, heterogene Gruppe Menschen mit
        verschiedensten Selbstbezeichnungen (erneut und somit reproduzierend) in
        Bezug auf „Männlichkeit“ definiert haben. Wir sind offen für Vorschläge
        für eine Begrifflichkeit, welche ausdrückt, dass Menschen in Bezug auf
        Sexismus nicht oder teilweise nicht privilegiert sind und
        (unterschiedliche) sexistische Diskriminierungserfahrungen machen.
      </article>
    </div>
    </React.Fragment>);
    }

export default Ifaqs;
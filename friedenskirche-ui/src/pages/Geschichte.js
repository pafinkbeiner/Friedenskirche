import React,{useEffect} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

//Assets
import img1 from './assets/Geschichte/csm_1875_628a379f8b.jpg';
import img2 from './assets/Geschichte/csm_1903_7396ad9d00.jpg';
import img3 from './assets/Geschichte/csm_1950_c3bdc2e776.jpg';

//SCSS
import './Page.scss'
import './GoodNews.scss';

const Geschichte = () => {

    const setPage = useStoreActions(actions => actions.setPage);
    const page = useStoreState(state => state.page);

    useEffect(() => {
        setPage("Geschichte");
        document.title = page;
    }, [page])

    return (
        <div className="main-container">
            <h1>Geschichte</h1>
            <br/>
            <div className="main-img">
                <img className="img-wide" src={img1} alt="img1"/>
            </div>
            <br/>
            Ausschnitt aus der Zeitschrift "Der Evangelist" vom 03.Juli 1875
            <br/>
            <br/>
            <b>Kapellen-Einweihung in Freudenstadt (Württemberg)</b>
            <br/>
            <br/>
            Am 6. Juni 1875 feierten wir den Ehren - und Freudentag unserer Gemeinde, indem wir unsere schöne und liebliche Kapelle dem Dienst des Herrn weiheten ...
            <br/>
            ... Sechs Jahre zuvor durfte ich oft hundert und noch mehr Personen das Wort des Lebens verkündigen. Das Bedürfnis, eine Kapelle zu haben, machte sich immer fühlbarer ...
            <br/>
            ... Auch unserem lieben Distrikts-Ältesten, Bruder Haußer, lagen seine Schwarzwälder sehr am Herzen. Nach Gottes gnädiger Führung wurde nun vor acht Wochen ein Fabrikgebäude unser Eigentum ... Das ganze Gebäude ist wie für uns gebaut. ... Der Saal kann 350 bis 400 Personen aufnehmen. ... Die Kapelle steht an der Stuttgarterstraße auf einer Anhöhe...
            <br/>
            ... Der Einweihungsgottesdienst wurde mit Gesang, Gebet und Lesen aus der heiligen Schrift eingeleitet. Nachdem der Gesangchor durch seinen erhebenden Gesang die Stimmung der Festgäste noch erhöht hatte, hielt Br. Haußer die Einweihungspredigt über Psalm 26,3: „Herr, ich habe lieb die Stätte deines Hauses, und den Ort, da deine Ehre wohnet.„
            <br/>
            ... Nachmittags hatten wir ein herrliches Liebesfest, bei welchem die meisten Geschwister in einem Bibelspruch oder Liedervers ihren Gefühlen und Erfahrungen Ausdruck gaben. Abends hielt Br. Haußer zu einem gut vertretenen Publikum einen Vortrag über den Methodismus ...
            <br/>
            ... Der ganze Tag war ein Tag der Segnungen vom Angesichte des Herrn und wird Vielen in bleibendem Andenken sein. Die Collecte war eine ziemlich gute und doch nur ein Geringes, im Vergleich mit dem, was wir nöthig haben ...
            <br/>
            ... Es ist uns, als ständen wir am Anfang einer neuen Periode unseres Werkes in dieser Stadt, und sind trotz aller Anfeindungen voller Hoffnung für die Zukunft. Der Herr, unser Gott, der gestern mit uns war und heute es ist, wird es auch fernerhin sein.
            <br/>
            H. Eberle
            <br/><br/>
            <div className="main-img">
                <img className="img-wide" src={img2} alt="img2"/>
            </div>
            <br/>
            Ausschnitt aus der Zeitschrift "Der Evangelist" 1904
            <br/>
            <br/>
            <b>Einweihung der 1. Friedenskirche in Freudenstadt</b>
            <br/>
            <br/>
            Der 13. Dezember 1903 war für den Bezirk Freudenstadt ein Freuden - und Segenstag, da die umgebaute Kapelle eingeweiht wurde. Schon früh strömten die wackeren Schwarzwälder aus der Nähe und Ferne herbei und betrachteten mit freudestrahlenden Augen ihre Friedenskirche, wie sie an Stelle der alten Kapelle festlich geschmückt dastand.
            <br/>
            ... Die Oberamtsstadt Freudenstadt ist durch die Friedenskirche um ein schönes Gotteshaus reicher geworden.
            <br/>
            Im Morgen-Gottesdienst hielt Bischof John H. Vincent die Festpredigt über Lukas 24, 27.
            <br/>
            ... Um Zeuge für Christum zu sein, muss man in der Schrift fleißig forschen. Prediger und Gemeindeglieder müssen täglich Nahrung aus der Schrift holen, wenn sie in Gnade und Erkenntnis wachsen wollen... Die Eltern wurden eindrücklich ermahnt, ihre Kinder frühe in Gottes Wort zu unterweisen, auf daß sie frühe den Herrn suchen und finden... Die Macht dieses Zeugnisses für die Schrift... kam fühlbar über die Versammlung, welche das ganze Haus ausfüllte.
            <br/>
            ... Den Nachmittags-Gottesdienst eröffnete der Vorstehende Älteste J. Kaufmann. Ihm folgte unser verehrter Bischof: ... Wo Christus wohnt, nicht nur im Haus, sondern in den Herzen seiner Kinder, da ist eine lebendige Kirche, als eine Gemeinschaft der Heiligen.
            <br/>
            ... Abends 7 ½ Uhr versammelten sich die Festgäste noch einmal im lieben Gotteshaus zu einem gesegneten Gesangsgottesdienst. So krönte der Herr den Einweihungstag der Friedenskirche in Freudenstadt mit dem reichen Segen seiner heiligen Allgegenwart, und in den Herzen klingt es fort und fort: „Wie lieblich sind deine Wohnungen, Herr Zebaoth„.
            <br/>
            Dr. A. Scharff
            <br/><br/>
            <div className="main-img">
                <img className="img-wide" src={img3} alt="img3"/>
            </div>
            <br/>
            
            Ausschnitt aus der Zeitschrift "Der Evangelist" 1950
            <br/>
            <br/>
            <b>Einweihung der Friedenskirche in Freudenstadt</b>
            <br/>
            <br/>
            Am Pfingstfest, dem 28. Mai 1950, erlebte die Gemeinde in Freudenstadt die Einweihung ihrer wiederaufgebauten Friedenskirche durch Bischof Dr. Sommer. Als am Kriegsende die Heimsuchung über Freudenstadt kam und ein großer Teil unserer Gemeindeglieder Hab und Gut verlor, war es für viele Betroffene das schmerzlichste Erleben, daß auch unsere liebe Friedenskirche ein Raub der Flammen wurde. Mit großer Dankbarkeit stand deshalb die Gemeinde, kaum fähig, das Wunder zu fassen, Pfingsten vor ihrem neuen Heime.
            <br/>
            ... Den Auftakt bildete das Choralblasen vom Turm herab ... Mit großer Aufgeschlossenheit lauschten die Zuhörer der Weihepredigt, der der Bischof Hesekiel 37 zugrunde legte. Es ist das immer neue Wunder, daß Gott zur Auferbauung seiner Gemeinde mit Baumaterial arbeitet, welches den Totengebeinen gleicht, die durch den Lebensodem Gottes zu neuem Leben erweckt werden. Wo Menschen vom Lebenshauch Gottes erfaßt und durchdrungen werden, suchen sie Gemeinschaft. „Ein frommer Einsiedler„ ist ein Widerspruch in sich selbst.
            <br/>
            In der Festfeier am Nachmittag wies Superintendent Haug auf die Bedeutung des Zeugendienstes der Gemeinde Jesu in der Gegenwart, betonte aber auch die Verpflichtung, geistliches Leben zu vertiefen. Die Festfeier wurde durch gesangliche und musikalische Darbietungen und Grußworte der Vertreter der Kirchen, Behörden und Nachbargemeinden umrahmt.
            <br/>
            ... Der Baubericht gab der Gemeindeprediger H. Dorn. Die umfangreichen Aufräumungsarbeiten, welche Direktor K. Jahnke 1945 mit freiwilligen Helfern tatkräftig begonnen hatte, konnten 1948 beendet werden. 53.000 Backsteine wurden geborgen und gereinigt, 200 cbm Hausteine aus den Trümmern gewonnen, etwa 1000 cbm Schutt und Erde abtransportiert. Unvergeßlich ist der freiwillige Einsatz von 24 methodistischen Holzbauern der Bezirke Freudenstadt und Klosterreichenbach im Frühjahr 1948, die am Fuß der Hornisgrinde einen großen Teil des Bauholzes fällten und anrückten.
            <br/>
            ... Gott gab den Bemühungen seinen Segen, so daß das Werk über Erwarten gelang. Freudige Überraschung malte sich auf vielen Gesichtern, als die Gemeinde festlich einzog. Der schöne Kirchenraum wird als eine Stätte der Andacht und Erhebung empfunden. Architektur, Malerei, Lichtspannung und Farbgebung stehen in wohltuendem Zusammenklang.
            <br/>
            Heinrich Dorn
            <br/>
        </div>
    )
}

export default Geschichte

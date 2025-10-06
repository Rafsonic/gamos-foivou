import { Slide } from "react-awesome-reveal";
import SectionTitle from "../SectionTitle";
import sImg1 from "../../images/event/1.jpg";
import sImg2 from "../../images/event/2.jpg";
import sImg3 from "../../images/event/3.jpg";
import LocationMap from "./Modal";
import { Clock2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import bow from "../../images/icons/bow-tie.svg";
import shoe from "../../images/icons/bridal-shoe.svg";
import church from "../../images/icons/church.svg";
import wedding from "../../images/icons/wedding.svg";
import cake from "../../images/icons/cake.svg";

const EventSection = (props) => {
  const { t } = useTranslation();

  const zomataLovationFoivou = () => {
    return (
      <>
        <span>{t("fivos.span1")} </span>
        <br />
        <span>{t("fivos.span2")}</span> <br /> <span>Τ.Κ. 3047</span>
      </>
    );
  };

  const zomataLovationChristianas = () => {
    return (
      <>
        <span>{t("xristiana.span1")} </span>
        <br />
        <span>{t("xristiana.span2")}</span>
      </>
    );
  };

  const zomataLovationEkklisias = () => {
    return (
      <>
        <span>{t("ekklisia.span1")}</span>
        <br />
        <span>{t("ekklisia.span2")}</span>
      </>
    );
  };

  const sixaritiria = () => {
    return (
      <>
        <span>{t("sixaritiria.span1")} </span>
        {/* <br /> */}
        {/* <span>Agia Fila</span> */}
      </>
    );
  };

  const dipno = () => {
    return (
      <>
        <span>OPUS Event Venue</span>
        <br />
        <span>Eleftherias 132, Limassol</span>
      </>
    );
  };

  const Events = [
    {
      Simg: sImg1,
      title: t("fivos.title"),
      li1: "12:00 PM ",
      li2: zomataLovationFoivou(),
      animation: "1200",
      link: "https://maps.app.goo.gl/FmA91uQFGrxBd8nn7",
      icon: <img src={bow} alt="Bow tie" height={70} />,
    },
    {
      Simg: sImg2,
      title: t("xristiana.title"),
      li1: "14:30 PM",
      li2: zomataLovationChristianas(),
      animation: "1400",
      link: "https://maps.app.goo.gl/kVuZhdutJhM2Z55H6",
      icon: <img src={shoe} alt="shoe" height={65} />,
    },
    {
      Simg: sImg3,
      title: t("ekklisia.title"),
      li1: "16:30 PM",
      li2: zomataLovationEkklisias(),
      animation: "1600",
      link: "https://maps.app.goo.gl/AeVF8n3jw8BKvL9u9",
      icon: <img src={church} alt="church" height={70} />,
    },
  ];

  const SecondEvents = [
    {
      Simg: sImg3,
      title: t("sixaritiria.title"),
      li1: "18:00 - 19:00",
      li2: sixaritiria(),
      animation: "1800",
      link: "https://maps.app.goo.gl/AeVF8n3jw8BKvL9u9",
      icon: <img src={wedding} alt="wedding" height={70} />,
    },
    {
      Simg: sImg3,
      title: t("dinner.title"),
      li1: "20:30",
      li2: dipno(),
      animation: "2000",
      link: "https://maps.app.goo.gl/Qm5ypHVgfYkqPk4f7",
      icon: <img src={cake} alt="cake" height={70} />,
    },
  ];

  return (
    <section className="wpo-event-section section-padding" id="event">
      <div className="container">
        <SectionTitle subTitle={t("our_wedding")} MainTitle={t("when_where")} />
        <div className="wpo-event-wrap">
          <div className="row">
            {Events.map((event, eitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                <Slide
                  direction="up"
                  duration={event.animation}
                  triggerOnce="true"
                >
                  <div className="wpo-event-item">
                    {/* <div className="wpo-event-img"> */}
                    {/* <div className="wpo-event-img-inner">
                        <img src={event.Simg} alt="" />
                      </div> */}
                    {/* </div> */}
                    <div className="wpo-event-text">
                      <div className="title">
                        {event.icon}
                        <h2>{event.title}</h2>
                      </div>
                      <ul>
                        <li className="">
                          <Clock2 size={20} /> {event.li1}
                        </li>
                        <li>{event.li2}</li>
                        <li>
                          <LocationMap link={event.link} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </Slide>
              </div>
            ))}
          </div>
          <div className="row">
            {SecondEvents.map((event, eitem) => (
              <div className="col col-lg-6 col-md-6 col-12" key={eitem}>
                <Slide
                  direction="up"
                  duration={event.animation}
                  triggerOnce="true"
                >
                  <div className="wpo-event-item">
                    {/* <div className="wpo-event-img"> */}
                    {/* <div className="wpo-event-img-inner">
                        <img src={event.Simg} alt="" />
                      </div> */}
                    {/* </div> */}
                    <div className="wpo-event-text">
                      <div className="title">
                        {event.icon}
                        <h2>{event.title}</h2>
                      </div>
                      <ul>
                        <li className="">
                          <Clock2 size={20} /> {event.li1}
                        </li>
                        <li>{event.li2}</li>
                        <li>
                          <LocationMap link={event.link} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </Slide>
              </div>
            ))}
          </div>
          <div className="row">
            <h2
              className="text-center primary4 gothic"
              style={{ fontWeight: 600, color: "#737a5d", marginTop: "1rem" }}
            >
              {t("parking.title")}
            </h2>
            <h6 className="text-center parking-description">
              {t("parking.sub1")}
            </h6>
            <h6 className="text-center parking-description">
              {t("parking.sub2")}
            </h6>

            <div
              className="col col-lg-6 col-md-6 col-12 "
              style={{ marginTop: "1rem" }}
            >
              <div className="text-center">
                <LocationMap
                  link={"https://maps.app.goo.gl/HTjE5H7F8UjveqSo6?g_st=ipc"}
                  label="Location Parking 1"
                  buttonClass="parking"
                />
              </div>
              <div className="text-center" style={{ marginTop: "2rem" }}>
                <LocationMap
                  link={"https://maps.app.goo.gl/dX6Pkg3zmBS3TKJr7?g_st=ipc"}
                  label="Location Parking 2"
                  buttonClass="parking"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;

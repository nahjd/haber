// import { getNewsTopHeadlines } from "@/api";
// import { removeDuplicateData } from "@/utils";

import "../css/TopHeadlines.css";
// import Article from "./Article";

const TopHeadlines = async () => {
  //   const newsTop = await getNewsTopHeadlines();
  //   const filterArticles = removeDuplicateData(newsTop);

  return (
    // <div className="w-[700px]">
    //   {filterArticles.map((article, idx) => (
    //     <div key={`${article?.title}-${idx}`}>
    //       <Article data={article} />
    //     </div>
    //   ))}
    // </div>
    <>
      <section
        className="container"
        style={{
          width: "950px",
          margin: "0 auto",

          position: "relative",
        }}
      >
        <aside className="asides">
          <div className="aside">
            <div className="text">
              <hr className="top" />
              <h1>Top Stories</h1>
              <hr />
              <h2>What to Know: New COVID Variant JN.1</h2>
              <span>
                JN.1 is the fastest growing variant in the U.S., making up more
                than 1 in 5 new coronavirus infections, according to CDC
                estimates.
              </span>
              <p>Cecelia Smith-Schoenwalder</p>
              <br />
              <hr />
              <h2>Senate Eyes Vote on Funding Package</h2>
              <span>
                The upper chamber is sticking around to try to come to an
                agreement on a major national security funding package before
                year’s end. <br />
                But the path forward is tenuous.
              </span>
              <p>Kaia Hubbard</p>
              <div className="image">
                <img
                  src="https://www.usnews.com/object/image/0000018c-6f98-d977-abce-fff98b960000/578fed5211df422188cfe95391ed3059Giuliani_Election_Trial_15897.jpg?update-time=1702678474000&size=responsiveSquare150"
                  alt=""
                />
                <p>Jury: Giuliani Must Pay $148M in Damages</p>
              </div>
              <div className="image">
                <img
                  src="https://www.usnews.com/object/image/0000018c-6f77-d977-abce-ff7715830000/tag%3Areuters.com%2C2023%3Anewsml_LYNXMPEJBE0PI%3A12023-12-15T214439Z_1_LYNXMPEJBE0PI_RTROPTP_3_ISRAEL-PALESTINIANS-VIOLENCE-HOSTAGES.JPG?update-time=1702676679000&size=responsiveSquare150"
                  alt=""
                />
                <p>Israelis Kill 3 Hostages by Mistake</p>
              </div>
              <div className="image">
                <img
                  src="https://www.usnews.com/object/image/0000018c-6f46-d39a-a7fc-6fd718950000/gettyimages-1384423423.jpg?update-time=1702674925138&size=responsiveSquare150"
                  alt=""
                />
                <p>COVID Hospitalizations on the Rise</p>
              </div>
              <div className="image">
                <img
                  src="https://www.usnews.com/object/image/0000018c-6a65-d7fc-a59c-ff6d58690000/ap23177027348831.jpg?update-time=1702592146566&size=responsiveSquare150"
                  alt=""
                />
                <p> The GOP’s Path to a Biden Impeachment</p>
              </div>
              <div className="image">
                <img
                  src="https://www.usnews.com/object/image/0000018c-689a-db42-ad8d-ffdf1c450000/ap23345762232490.jpg?update-time=1702562513847&size=responsiveSquare150"
                  alt=""
                />
                <p>Retail Sales Come in Above Estimates</p>
              </div>
            </div>
          </div>
          <div className="asidee">
            <div className="text">
              <hr className="rank" />
              <h1>RANKINGS & ADVICE</h1>
              <hr />
              <h2>
                <b>Top Tips to Prep Your Holiday Kitchen</b>
              </h2>
              <img
                src="https://www.usnews.com/object/image/0000018c-6490-d913-ad9d-779d429b0000/https-media-gettyimages-com-id-1345491527-photo-family-arrival-and-sitting-for-christmas-lunch-or-dinner-at-home.jpg?update-time=1702494263776&size=responsive300"
                alt=""
              />
              <span>
                The well-used kitchen needs extra attention in decor,
                organization and safety efforts around the holidays.
              </span>
              <p>
                <b>Karen Dybis</b>
              </p>
              <br />
              <hr />
              <ul className="list">
                <li>Gifts Less Than $20 </li> <br />
                <li>Best Marijuana Stocks for 2024</li> <br />
                <li>Do Blue Light Glasses Work? </li> <br />
                <li>Why Do Americans Delay Holiday Shopping?</li> <br />
                <li>
                  How to Get Rid of <br />
                  Cold and Flu{" "}
                </li>{" "}
                <br />
                <li>How AI Can Help Gifting</li> <br />
              </ul>
            </div>

            <div className="best">
              <hr />
              <p>
                <b>See all U.S. News Rankings »</b>
              </p>

              <img
                className="bestimg"
                src="https://www.usnews.com/static/img/badge-best-gold.svg"
                alt=""
              />
            </div>
          </div>
        </aside>
        <div
          className="baslik"
          style={{
            width: "100%",
            height: "100vh",
            marginLeft: "150px",
            position: "absolute",
            top: "0",
          }}
        >
          <div
            className="middle"
            style={{
              backgroundColor: "red",
              marginTop: "5px",
              width: "650px",
              height: "450px",
              position: "relative",
              display: "flex",
            }}
          >
            <div className="text">
              {" "}
              <h4>POLITICS</h4>
              <h1>
                Making the <br /> Political Personal
              </h1>
              <span> By Susan Milligan</span>
            </div>

            <div
              className="down"
              style={{
                backgroundColor: "#6F7480",
                position: "absolute",
                bottom: "0",
                color: "white",
                padding: "5px",
              }}
            >
              <p>
                Patients affected by abortion bans are going public – very
                public, attaching their stories to the struggle even as states
                move to ban or severely restrict the procedure.
              </p>
            </div>
          </div>
          <div className="downs">
            <div className="downleft">
              {" "}
              <br />
              <div className="politics">
                <div className="text">
                  <h4>POLITICS</h4>
                  <h1>
                    Supreme Court <br />
                    Intervention, Act II
                  </h1>
                  <p>
                    Cases the justices agreed to hear are set to have major
                    consequences for voter turnout in the 2024 presidential
                    election – and could even dictate who returns to the White
                    House.
                  </p>{" "}
                  <br />
                  <span>Lauren Camera</span>
                </div>
              </div>
            </div>{" "}
            <div className="downright">
              <br />
              <div className="about">
                <div className="text">
                  <hr className="bottom" />
                  <h1>About U.S News</h1>
                  <hr />
                  <h2>
                    U.S. News Celebrates <br /> 90 Years
                  </h2>
                  <img
                    className="img"
                    src="https://www.usnews.com/cmsmedia/53/a4/1911fe6e4897a5a8a35f3330163f/90thlogo.png"
                    alt=""
                  />
                  <p>
                    Learn how facts and data not only empower our readers but
                    also allow our various leaders – be it political, community,
                    business or institutional leaders – to make informed
                    decisions and understand the world around us.
                  </p>{" "}
                  <br />
                  <span id="more">
                    <b>Learn More »</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="main">
          <br />
          <div className="container2">
            <div className="sol">
              <hr className="solhr" />
              <h1>World Report</h1>
              <h2>
                <b>The Demographics of Israel and Gaza</b>
              </h2>
              <span>
                The vital statistics of Israel and the Palestinian territories
                show deep disparities in a region now further ravaged by war.
              </span>{" "}
              <br />
              <br />
              <p>
                {" "}
                <b>Christopher Wolf and Julia Haines Nov. 14, 2023</b>
              </p>
              <br />
              <hr />
              <hr className="solhr" />
              <h1>Spending</h1>
              <h2>
                <b>Gifts Less Than $20 </b>
              </h2>
              <span>
                Finding an affordable gift that makes a lasting impression can
                be a major challenge – here's a solution.
              </span>{" "}
              <br />
              <br />
              <p>
                {" "}
                <b>
                  {" "}
                  Erica Sandberg, Barri Segal and Tanza Loudenback Dec. 15, 2023
                </b>
              </p>
              <br />
              <hr />
              <hr className="solhr" />
              <h1>World Report</h1>
              <h2>
                <b>The Demographics of Israel and Gaza</b>
              </h2>
              <span>
                The vital statistics of Israel and the Palestinian territories
                show deep disparities in a region now further ravaged by war.
              </span>{" "}
              <br />
              <br />
              <p>
                {" "}
                <b>Christopher Wolf and Julia Haines Nov. 14, 2023</b>
              </p>
              <br />
              <hr />
              <hr className="solhr" />
              <h1>World Report</h1>
              <h2>
                <b>The Demographics of Israel and Gaza</b>
              </h2>
              <span>
                The vital statistics of Israel and the Palestinian territories
                show deep disparities in a region now further ravaged by war.
              </span>{" "}
              <br />
              <br />
              <p>
                {" "}
                <b>Christopher Wolf and Julia Haines Nov. 14, 2023</b>
              </p>
              <br />
              <hr />
              <hr className="solhr" />
              <h1>World Report</h1>
              <h2>
                <b>The Demographics of Israel and Gaza</b>
              </h2>
              <span>
                The vital statistics of Israel and the Palestinian territories
                show deep disparities in a region now further ravaged by war.
              </span>{" "}
              <br />
              <br />
              <p>
                {" "}
                <b>Christopher Wolf and Julia Haines Nov. 14, 2023</b>
              </p>
              <br />
              <hr />
              <hr className="solhr" />
              <h1>World Report</h1>
              <h2>
                <b>The Demographics of Israel and Gaza</b>
              </h2>
              <span>
                The vital statistics of Israel and the Palestinian territories
                show deep disparities in a region now further ravaged by war.
              </span>{" "}
              <br />
              <br />
              <p>
                {" "}
                <b>Christopher Wolf and Julia Haines Nov. 14, 2023</b>
              </p>
              <br />
              <hr />
              <br />
              <hr className="solhr" />
              <h1>World Report</h1>
              <h2>
                <b>The Demographics of Israel and Gaza</b>
              </h2>
              <span>
                The vital statistics of Israel and the Palestinian territories
                show deep disparities in a region now further ravaged by war.
              </span>{" "}
              <br />
              <br />
              <p>
                {" "}
                <b>Christopher Wolf and Julia Haines Nov. 14, 2023</b>
              </p>
              <br />
              <hr />
              <hr className="solhr" />
              <h1>World Report</h1>
              <h2>
                <b>The Demographics of Israel and Gaza</b>
              </h2>
              <span>
                The vital statistics of Israel and the Palestinian territories
                show deep disparities in a region now further ravaged by war.
              </span>{" "}
              <br />
              <br />
              <p>
                {" "}
                <b>Christopher Wolf and Julia Haines Nov. 14, 2023</b>
              </p>{" "}
              <br />
            </div>

            <div className="orta">
              <div className="images">
                <img
                  src="https://www.usnews.com/object/image/0000018b-d493-de37-a9df-ffb76a370001/hc-demographics.jpg?update-time=1700078548792&size=responsive640"
                  alt=""
                />{" "}
                <br />
                <img
                  src="https://www.usnews.com/object/image/0000018c-6dcd-d30e-a79d-6fff31460000/https-media-gettyimages-com-id-1446742826-photo-young-adult-man-sitting-on-a-yellow-couch-and-holding-a-blue-package-wrapped-with-blue-ribbon.jpg?update-time=1702649264630&size=responsive640"
                  alt=""
                />
                <br />
                <img
                  src="https://www.usnews.com/object/image/0000018b-f3d4-d4ce-a5eb-ffffafea0000/gettyimages-1239572694.jpg?update-time=1700602937877&size=responsive640"
                  alt=""
                />
                <br />
                <img
                  src="https://www.usnews.com/object/image/0000018c-690a-ddbe-a9ad-6fbebe700000/1-2.jpg?update-time=1702569404431&size=responsive640"
                  alt=""
                />
                <br />
                <img
                  src="https://www.usnews.com/object/image/0000018c-4a27-d085-adde-daaf8a460000/gettyimages-1293696418.jpg?update-time=1702054530757&size=responsive640"
                  alt=""
                />
                <br />
                <img
                  src="https://www.usnews.com/object/image/0000018c-6de2-da98-adfd-6fefcc1f0000/https-media-gettyimages-com-id-1148949330-photo-high-angle-view-of-young-business-executives-working-together.jpg?update-time=1702650646103&size=responsive640"
                  alt=""
                />
                <br />
                <img
                  src="https://www.usnews.com/object/image/0000018c-64e5-d203-ad8d-7eedb4d30000/gettyimages-1282117098.jpg?update-time=1702499864244&size=responsive640"
                  alt=""
                />
                <br />
                <img
                  src="https://www.usnews.com/object/image/0000018c-6f0c-d39a-a7fc-6f9f2e6b0000/gettyimages-1490133656.jpg?update-time=1702670318837&size=responsive640"
                  alt=""
                />
                <br />
              </div>
            </div>
            <div className="sag">
              <hr className="most" />
              <h1>
                {" "}
                <b>MOST POPULAR</b>
              </h1>{" "}
              <br />
              <div className="always">
                <div className="first">
                  <div className="bir">
                    <h1>1</h1>
                  </div>
                  <div className="text1">
                    <p>What to Know: New COVID Variant </p>
                  </div>
                </div>{" "}
                <br />
                <div className="first">
                  <div className="bir">
                    <h1>2</h1>
                  </div>
                  <div className="text1">
                    <p>What to Know: New COVID Variant </p>
                  </div>
                </div>{" "}
                <br />
                <div className="first">
                  <div className="bir">
                    <h1>3</h1>
                  </div>
                  <div className="text1">
                    <p>What to Know: New COVID Variant </p>
                  </div>
                </div>{" "}
                <br />
                <div className="first">
                  <div className="bir">
                    <h1>4</h1>
                  </div>
                  <div className="text1">
                    <p>What to Know: New COVID Variant </p>
                  </div>
                </div>{" "}
                <br />
                <div className="first">
                  <div className="bir">
                    <h1>5</h1>
                  </div>
                  <div className="text1">
                    <p>What to Know: New COVID Variant </p>
                  </div>
                </div>{" "}
                <br />
              </div>
              <div className="daily">
                <img
                  src="https://tpc.googlesyndication.com/simgad/17776917245032031100?"
                  alt=""
                />
              </div>{" "}
              <br />
              <br />
              <div className="table">
                <div className="bestt">
                  <img
                    src="https://www.usnews.com/static/img/badge-best-gold.svg"
                    alt=""
                  />
                  <h3>
                    <b>U.S. News Rankings</b>
                  </h3>
                  <p>life's decisions made here.</p>
                </div>{" "}
                <br />
                <hr className="red" />
                <div className="text10">
                  <h1>
                    <b>Education</b>
                  </h1>
                  <p>Colleges, Grad Schools, more »</p>
                </div>{" "}
                <br />
                <hr className="red" />
                <div className="text10">
                  <h1>
                    <b>Health</b>
                  </h1>
                  <p>Hospitals, Childre Hospitals, more »</p>
                </div>{" "}
                <br />
                <hr className="red" />
                <div className="text10">
                  <h1>
                    <b>Cars</b>
                  </h1>
                  <p>New Cars, Used Cars, more »</p>
                </div>{" "}
                <br />
                <hr className="red" />
                <div className="text10">
                  <h1>
                    <b>Money</b>
                  </h1>
                  <p> Old Money, Grad Money, more »</p>
                </div>{" "}
                <br />
                <hr className="red" />
                <div className="text10">
                  <h1>
                    <b>Travel</b>
                  </h1>
                  <p>Travel, Revards Travel, more »</p>
                </div>{" "}
                <br />
                <hr className="red" />
                <div className="text10">
                  <h1>
                    <b>Real Estate</b>
                  </h1>
                  <p>Real Estate, Home Estate, more »</p>
                </div>{" "}
                <br />
                <hr className="red" />
                <div className="text10">
                  <h1>
                    <b>Governance</b>
                  </h1>
                  <p>States, Countries</p>
                </div>{" "}
                <br />
              </div>
            </div>
          </div>
        </section>

        <div className="photo">
          <div className="save">
            <hr className="pht" />
            <h1 className="phtt">
              <b>PHOTO GALARIES</b>
            </h1>
          </div>
          <div className="galary">
            <div className="soll">
              <h4>PHOTOS</h4>
              <h1>
                <b>
                  Photos You <br />
                  Should See - <br />
                  Dec. 2023
                </b>{" "}
                <br />
              </h1>
              <p>
                By <b> Michael A.</b> Brooks Dec.14,2023
              </p>
            </div>
            <div className="sagg">
              <div className="text11">
                <h4>PHOTOS</h4>
                <h1>
                  <b>War in Israel and Gaza </b>
                </h1>
                <p>
                  U. <b>S. News Staff</b> Dec. 12, 2023
                </p>
              </div>{" "}
              <br />
              <div className="downn">
                <div className="text11">
                  <h4>PHOTOS</h4>
                  <h1>
                    <b>Joe Biden Behind The Scenes</b>
                  </h1>
                  <p>
                    U. <b>Lydia Chebbine</b> Dec. 12, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopHeadlines;

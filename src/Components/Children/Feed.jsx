import { useEffect, useRef, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { json, useLocation, useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import Spinner from "../Widgets/Spinner.jsx";
const Feed = () => {
  // const { data, loading, error } = useFetch(
  //   "http://localhost:5173/db/source.json"
  // );
  const [constList, setConstList] = useState(null);
  const [list, setList] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [filterBG, setFilterBG] = useState(null);
  const [filterVisibility, setfilterVisibility] = useState(false);
  const [filterName, setFilterName] = useState(null);
  const searchInput = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const mainPageRef = useRef();
  useEffect(() => {
    // if (data) {
    //   setList(data);
    // }
    fetch("/db/source.json")
      .then((data) => data.json())
      .then((body) => {
        setList(body.filter((item) => item.fname != ""));
        // setList(body);
        setIsPending(false);
        setConstList(body.filter((item) => item.fname != ""));
      });
  }, []);
  useEffect(() => {
    // Restore the scroll position when navigating back to the main page

    const scrollPosition = sessionStorage.getItem("scrollPosition");
    window.scrollTo(0, parseInt(scrollPosition));
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition, 10));
      }, 100);
    }

    sessionStorage.removeItem("scrollPosition");
  }, [location]);
  const filter_blood_group__ = (group) => {
    if (group == filterBG) {
      setFilterBG(null);
      setList(constList);
    } else {
      setFilterBG(group);

      setList(
        constList.filter(
          (item) => item.blood_group.toLowerCase() == group.toLowerCase()
        )
      );
    }
  };
  const filter_name = (name) => {
    setFilterName(name);
    setList(
      constList.filter((item) =>
        item.fname.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  return (
    <div className="Feed section">
      <div className="ttl-1">Meet-ETE'21</div>
      <section className="search-bar-wrapper">
        <div className="search-container">
          <BiSearch className="ic-searchBar" />
          <input
            onKeyUp={(e) => filter_name(e.target.value)}
            type="text"
            className="search-input"
            placeholder="Search Name"
            ref={searchInput}
          />
          {filterName && (
            <MdCancel
              onClick={(e) => {
                setList(constList);
                searchInput.current.value = "";
                setFilterName(null);
              }}
              className="ic-searchBar"
            />
          )}
          <BiFilterAlt
            onClick={() => setfilterVisibility(!filterVisibility)}
            className="ic-searchBar"
            id="filter-btn"
          />
        </div>
        <div className="search-filter-wrapper">
          {filterVisibility && (
            <>
              <p className="lab-1">Filter Blood Group</p>
              <div className="blood-group-container">
                <div
                  className={
                    filterBG == "A+" ? "blood-grp bg-selected" : "blood-grp"
                  }
                  onClick={() => filter_blood_group__("A+")}
                >
                  A+
                </div>

                <div
                  className={
                    filterBG == "B+" ? "blood-grp bg-selected" : "blood-grp"
                  }
                  onClick={() => filter_blood_group__("B+")}
                >
                  B+
                </div>

                <div
                  className={
                    filterBG == "O+" ? "blood-grp bg-selected" : "blood-grp"
                  }
                  onClick={() => filter_blood_group__("O+")}
                >
                  O+
                </div>
                <div
                  className={
                    filterBG == "O-" ? "blood-grp bg-selected" : "blood-grp"
                  }
                  onClick={() => filter_blood_group__("O-")}
                >
                  O-
                </div>
                <div
                  className={
                    filterBG == "AB+" ? "blood-grp bg-selected" : "blood-grp"
                  }
                  onClick={() => filter_blood_group__("AB+")}
                >
                  AB+
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <div className="feed-container">
        {!isPending ? (
          list.map((item, index) => {
            if (item.name != "")
              return (
                <div
                  className="list-container"
                  onClick={() => {
                    const scrollPosition =
                      window.pageYOffset || document.documentElement.scrollTop;
                    sessionStorage.setItem("scrollPosition", scrollPosition);
                    navigate(`/${item.slug}`);
                  }}
                  key={Math.random()}
                >
                  <div className="list-img">
                    <img
                      src={
                        item.profile_image
                          ? "res/thumbnail/" + item.roll + "_ete_21.png"
                          : "res/thumbnail/avatar.png"
                      }
                    />
                  </div>
                  <div className="list-meta">
                    {" "}
                    <div className="list-title">{item.fname}</div>
                    <div className="lab-list-roll">{item.roll}</div>{" "}
                    {item.role == "cr" ? (
                      <div className="list-role">CR</div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
          })
        ) : (
          <div className="spinner-wrapper">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;

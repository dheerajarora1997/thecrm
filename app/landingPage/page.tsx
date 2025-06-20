import SamplePage1 from "./SamplePage1";
import SamplePage2 from "./SamplePage2";

export default function Landing() {
  const pages = [SamplePage1, SamplePage2];

  return (
    <>
      <div className="d-inline-block w-100 position-relative">
        <h4>Published Landing Page</h4>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="landingpage-wrapper rounded border border-opacity-25">
              {/* <SamplePage1 /> */}
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row">
              {pages?.map((page, index) => {
                return (
                  <div
                    key={index}
                    className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  >
                    <div className="landingpage-wrapper rounded border border-opacity-25 p-5">
                      {page()}
                    </div>
                  </div>
                );
              })}
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="landingpage-wrapper rounded border border-opacity-25 p-5">
                  <SamplePage2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Maintenance /> */}
    </>
  );
}

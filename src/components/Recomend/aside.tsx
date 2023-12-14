import React from "react";
import s from "./aside.module.scss";
import Link from "next/link";

const Recomend = () => {
  return (
    <>
      <div className={s.manga_scaff}>
        <Link href='#' className={s.Link}>
          <div className={s.Link_inner}>
            <div className={s.main_img}>
              <div>
                <img src='/img/Logo/CLAYMORE.webp' alt='' />
              </div>
            </div>
            <div className={s.info}>
              <div>
                <span>
                  Claymore sdad
                  dsadddsaddddwere dasdwedw dsadada sdsoiewrewr
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={s.manga_scaff}>
        <Link href='#' className={s.Link}>
          <div className={s.Link_inner}>
            <div className={s.main_img}>
              <div>
                <img src='/img/Logo/CLAYMORE.webp' alt='' />
              </div>
            </div>
            <div className={s.info}>
              <div>
                <span>Claymore</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Recomend;

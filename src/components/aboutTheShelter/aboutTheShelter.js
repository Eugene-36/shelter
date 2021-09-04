import React from 'react';
import s from './aboutTheShelter.module.css';
import whitePet from '../icons/about-pets.png';
function AboutShelter() {
  return (
    <section className={s.sectionAbout}>
      <div className={s.containerAb  }>
        {/* <h2 className={s.sectionTitle}>
          About the shelter <br />
          “Cozy House”
        </h2> */}
        <ul className={s.list}>
          <li className={s.listQualitiesText}>
            <div className={s.iconAntenna}>
              {/* <svg class="antenna" width="70px" height="70px">
                <use href="./img/all-icon/sprite-opt.svg#icon-antenna"></use>
              </svg> */}
              <div className={s.blockText}>
                <h2 className={s.sectionTitle}>
                  About the shelter <br />
                  “Cozy House”
                </h2>
              </div>
              <div className={s.blockText}>
                <p className={s.text}>
                  Currently we have 121 dogs and 342 cats on our hands and
                  statistics show that only 20% of them will find a family. The
                  others will continue to live with us and will be waiting for a
                  lucky chance to become dearly loved.
                </p>
              </div>
              <div className={s.blockText}>
                <p className={s.text}>
                  We feed our wards with the best food and make sure that they
                  do not get sick, feel comfortable (including psychologically)
                  and well. We are supported by 87 volunteers and 28 employees
                  of various skill levels. About 12% of the animals are taken by
                  the shelter staff. Taking care of the animals, they become
                  attached to the pets and would hardly ever leave them alone.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <img className="about-dog" src={whitePet} alt="" />
      </div>
    </section>
  );
}

export default AboutShelter;

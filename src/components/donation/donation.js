import React from 'react';
function Donation(params) {
  return (
    <div>
      <h2>You can also make a donation</h2>
      <form action="">
        <label htmlFor="">
          <span>Name of the bank / Type of bank account</span>
          <input type="text" />
        </label>
        <p>
          Legal information and lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac
          diam. Praesent ultrices maximus tortor et vulputate. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </form>
    </div>
  );
}

export default Donation;

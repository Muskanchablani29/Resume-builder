import React from 'react';
import './Footer.css';
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_Content">
        {/* Social Media Section */}
        <div className="content1">
          <h3>Connect with us on <br />social media</h3>
          <div className="content1_img">
          <a href="https://www.facebook.com/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAARVJREFUWEftlTtKBEEURc9BUxdh4AJcgp/JxFRMNHILBiIYjUswMtDMbEAw8QOuwMTUQHN1ASI8aWmkKRh77PlUYBV0Up/7Tt163JbMw8z1KQBjORARc8BW/W0CAbwDr8Clut/2xJ0BImIeGAAbQ4pcqcPWfo6MA9AHDn654fQA6ttXVi/kAlgGHpLiL8BJPf8JvKmPU+mBiFgF7hLxbfWirWC63qkHImIduEnEVtT7WQH0gOv/A1AHTtVYfxl99bDtwEg90BFgTz3NCdBTb3MCLKlPkwKonuqoIbYI7CTi58BzY+5Y/ZgIQCoSEWtAau9Mc6AAFAeKA8WB7A5UUbybJOSZ2ozithT+Xh/pdzySUsdNBeAL/gaGIWmJkcsAAAAASUVORK5CYII="/></a>
            <a href="https://x.com/?lang-en"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAmRJREFUWEftlk2IzWEUxn+PhJSQjywkRUaUBbJgIyY1NbYWUigb8i3ZUaPs1FBW0pSyMZRSYiGxkI2UaHykCIlofH+UetyT/+jOvf97/+9/btOU5mzfc57zvO/7nA8xwqYRzs8ogf/rBWxPA1YDi4GPQI+kL810VvcCtpdIul9GnLZnA0eBLTVxn4ADks7YngFsBPolnR3wyyPwBLgmaVcKCdtTgD5gVhP/R8BC4A2wQNLXXAIZWH922C1pXxEJ2+eymxW5PgdOA/OAw5JeR8CgF7A9E3hbhXQZ2CbpXSN029+AiUXZs/NfwDpJt5p9wVNgfhXgB2A3cF7S7+pEtsMv/FPsJ9Ap6Xq1c54GenLEFDGfgYsVhfcCDyS9tL0UuJuSHbhRufmaWt88AnOBm8CcAuC40bOs5FI49Era0JSA7RBIN3APOAhMSEFO9DkhaW8RgXFACGU4bKekUylfcAXoGAYGbZKixwyyPA2sAO7UlmiLhF5ICm3VWe4wst0JXADGt5h4ILxL0pEyBCYBayslth7Y2uJr/IiKkvS+DIEQ4ysgBkirdlLSnkYgDfcB2zsqBOpUW5JNDKFlkr6XJhABtjcDx4GY82UtZkQkf9wssHAjsh2Dph04BKxMZBFtu0PS7SL/FALLs+64qggsOw/ttBfdfADrHwHbY7MbTgbasrkdS0SsWKkWg2p7ZZmJCZpktfvAIuBYVn5jkhD+OsU/75cUXbSUNWpE04FNWS+Ip59agxo1HQq/ClyS9LBU1irnQg1k1RBVEItn9Ie+6p1uqInrNNAq0FDjk15gqOApcaME/gDELbAhIhsjjwAAAABJRU5ErkJggg=="/></a>
            <a href="https://www.instagram.com/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA9hJREFUWEftl1nMnWMUhZ8VQ1yIuUhqShBTQlpKhAYhQQw1NoIghoghFI2pdxJDIw2NlAZtEdwIokgNMY8xC2K+MI8huDIu3/rzfifff/7vfOc/XPSm++Yk57x7v+tde++19xEr2bSS72cVgKEM2N4P2BXYCZgG7DIkbX8CLwBvA+8DT0n6aJDPQAC2pwC3Awf/zzoJoCuAqyX93R+rFYDtzYA3gY2AP4D7gJeBd4B/JgFoHWAPYP/yGZdH8xhJbvpPAGA73z0BhPpceLSkjydxaesR2+cAC4HVgAskXT8MwFHAvcD3wLaSfh31ctt7AucCXwOLgWOTAuB3YIqk3+qYbQzcApxeHVwkKUFGNttXVqm7vDiGgZuBn4G1gcMlPdgF4Dlgb+AUSSnCCWZ7RsXQ2UA+tygV/yJwlaRfbF8MzC+OY3FsP1uldiYwV9KCLgAfANuVgnmk/3bbFxU612jB9gUwG/gUSCF/K+mbnLN9D3AMsEDS3C4ACRLnvSTlVT2zfWECAH8BN1Z0vpFLgK1DLXBgyfM0SdGApu+dwAnxk5S0jFlbDaT4ogG7SXq9Pmh7h9Ka8Zku6b0Wdi5LGgqwGZJ6LWs76TxpMgB+BDaM6kl6qwFgUcn7dVVnhIm22kirfQJsFQ2Q9GTDvwawWNJZXQz8UASon4GwMb264ERJd7UBKLmOaB0JzJMUNsbM9m3AycASSemygSlITjcBdpf0aiPAl8BU4FBJD3cAaG1j20uAU6uuWSrptC4A31V52jgSKumVBoB0RIrsPEk3dAB4uhpA+wBnSkr/1wwsS2sDyyQFyMgMXANcUjHwWmFnnKYXmtO+7wKrRyMk5WwNoK6BWyWd0QUgfbtpSwq2LIKzLnB3pWznV0qZgq0viPwuBbYHHquG10HNwWM7dXN8pHlYEX5eFcrmUUNJmes9s31I1R0PlMGSMRvVzMDK4Nq5HPystHAPXGGnFqKFkuZ0MRAKs3wcJumh/lzbznJyfwHZ/3Nefpyk6P44s51YecB8SZd2AXgcOCDTTFJ6f4LZThqOKG0ZFYwiviRpRdv5wkCEa8f+Im5TwmszMCpan5G076CAo3xve5tKhuudYqak57sYyCaT7Sc2S9LyUS4bwFjNalp8anM1G7SS1S2TxWGOpFT3yGZ7PeCO1FNxni0pxdizQQDWBz4sQymHgzxjumnZblLxP1XikhZN6zbjrVW26DWL03JJs/pf0bUVR3bnAZHNOsjILJRxneXkJkkBPc4m879gg7Jk5IVNC6i8PJtzdoivMnP6zqQ7VkiKZrTaUAD/5cmj+KwC8C9ww3kwt2CcIAAAAABJRU5ErkJggg=="/></a>
            <a href="https://in.linkedin.com/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAc1JREFUWEftljtoVEEUhr+vVFvBQsFKBEG7qI2FWBg0hTY2YhGw8AEWCj5aBV+NjW+wsxOCCgrpBBttLAQbTaGCNiIEwVKOOcsu3IzjGtfcbJAduMW9c2b+7/wzc+7IkJtD1mf5AkTEBmBW/dKmS784EBHbgbvA5q7wHfVIWxA1gDfApkLwjHq1DYh5ABGRWb+uCD1Tdy4FwHrgfUXoobq/dYAUiIj7wMFCbEJ9siQAXYjzwG7gK3BbfdyGeM65fOvAoBlHRCa1DlgLfFQ/95urdgxfANuKQYfU3Bu5R44CN4v+XLIL3WcSWNPo/w48B06o70qYxQK4CGwBJvpk+y1j1A/NmMUCyCxXLWDZHqgH2gBYgHYn5AewWp3tDRjEgfwv3KoopsWngBlgBXAN2FiJ26c+agNgXJ3uTRwReQreAisLiJNqwnXaIA7UTsEnNY/evBYRWT33FJ8vq+f+BaC2BE/VvRWAXKryV56VNZMY2IFjwI1C7HcAV4DTRew99XA/gJfA1mJQsxAdn9vJ14v+aXW84sAl4OwIYOTAyIG/dSDPaFnVptTObXmuuo0BZdGZ6d0XmmIRsQvYUQC8al7x/r8rWVmM/vQ+dAd+ApqLGjCyGKkHAAAAAElFTkSuQmCC"/></a>
            <a href="https://www.youtube.com/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAhlJREFUWEftlk+ITlEYxn8PEkUIiYV/sbAQZTHJZiZhIcnKRhZYKTbszELJipSlpmGh2VhYjJKkKTsLTY1S8i+xUWQxJKQe9/36vvHd4xvfuXczm3tW9/vu8z73d97zvuccMcdDc/x9GoAmA7NmwLYkuVOkttcBG4GFGYX7CXgt6Wc/7T8AtlcAV4CjwJJ+BhnvfwPPgUngjqQH3TElANsr2+I1GcZ1JWOSjnWCU4DrwNm6zhXiBiU9Dn0K8AbYXMGorvSapHMlANsLgCiaeXVdK8Tdl3QwBYiZRwZyRqQvOmQwR9xDMyVpZwowADzJNLwp6aTtw+2O2ZoZ15F9kLQ+BdgHPMw0agGEtr10p4vni0C0cM74LGl1CnAEuJsTDdySdKJba3tZG+IMML+Pz7Sk0P/tAtuHgPFMgFFJp1Kt7VXAGLC/j883SUtTgANAaZf6j0kJwHZ0TizDJWB5xiS+SIpNr5SBIWAiIzgkMwC2dwM3gO2ZsSF7L2lDCrALeJppMgpcKM6Kq8WhM7OtZsaG7JmkHSnAJuBtpsmLYtZrgVYh1RgTkvamAIuB7zXM6oTclnS8BBA/bL8CttRxrBgzLOlyL4Co4uGKZlXlv4BtRQZay52ehouAR8Ceqq6Z+mngvKSRjr7XjSj+i46I21Bsl/H8o8cH4n2cAVHN72YB+BhXsyKrcSt6WXjdK47hr93a5lbcZKDJwB8mspchVFmFTwAAAABJRU5ErkJggg=="/></a>
          </div>
        </div>

        {/* Job Seekers Section */}
        <div className="content2">
          <h3>JOB SEEKERS</h3>
          <div className="content2_list">
            <NavLink to="/"><li>Create a Resume</li></NavLink>
            <NavLink to="/Template"><li>Resume Example</li></NavLink>
            <NavLink to="/Template"><li>Resume Templates</li></NavLink>
            <NavLink to="/FAQ"><li>FAQ</li></NavLink>

          </div>
        </div>

        {/* Our Company Section */}
        <div className="content3">
          <h3>Our Company</h3>
          <div className="content3_list">
          <NavLink to="/About"><li>About Us</li></NavLink>
            <NavLink to="/Privacy"><li>Privacy Policy</li></NavLink>
            <NavLink to="/Terms"><li>Terms and Condition</li></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { FaSchool } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="bg-gray-900 p-6 text-left animate-fadeIn md:p-20">
      <div className="flex items-center mb-4">
        <FaSchool className="text-teal-400 text-3xl mr-4"/>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-teal-400">Moringa School</h3>
          <p className="text-gray-300 text-md md:text-lg">Certificate in Fullstack Software Development</p>
          <p className="text-gray-500 text-sm md:text-md">Graduated: 2024</p>
        </div>
      </div>
      <div>
    
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA2FBMVEX///8RKEv6wanzZhYNJUkACTzyXgDyYwwWMVXFy9P7zrvzZxz+9/P0djD0e0P5vKH97un2kmoAGEL84NH4rIz0ci/96uAAIUYAHERMW3SLlKNFVG4AADgAGUKVnKr6xq/zbSL4p4OIjZrr7fAAEj/5s5PDxcsjNVQAADrl5+v19vf//vzyWwCiqbReaX7a3eM3SWa2vMX1ilj71sUAADTR1dt8hZb94tb0eTz1gkv1jFqqsLtaZnwsP11pdYlKWXP2nHf3oX381b9yfI8tRmgAAEEAACM6T21XjOJiAAANv0lEQVR4nO2cCXuquhaGoUGiYgdpLThRWqgWrKK1onVqezz37v//j25WEAjD7nRuT9Wd73n2LjIk682w1kqkFQQuLi4uLi4uLi4uLi4uLq5v0+V4fPbTNnyjKrcy0f3x1U8b8l2anmAFYawouNr7aVu+RWczhGqvV0dVU0HVnzbmW1TF6IHOwXFNkcs/bc03aIqVWSU4HCPl6QDH6RHGUce9IPnyJ235Hl1jM6K6woc4TK/xcRQJrzA+wIhxi/E0Okby9K1791NjHMWIs5mCKj9qzPeIYJ3Sg94Lwhc/bMy3qIwUfD2tVMYPSDEPsQsF4VRWkGya5H9l/NO2fJPGhM40kTw/wGAYqlxVlJcDdKOMrpjMZg/V672bbR7tM+Hl7fzp4eIdH7LHhJWXe4yI5Kc33cj+ElbmWMHH8xlZwStvIeYRXpZvr4923v1cY+X46qxHw/lTOpxXrm5PtwRZwspFTcaIpHS7zThFCgpWDpU5ko+SF8smbEC9UC+UIbyEzRuE8K6nARcYhYafYWWecKllGZnVJznYfsoQHiNknp6fl58I4/m/ZO1XdKLUoqFZRTV2S7T3hIG4LMvQR2nCW4zmwZOvSJn9K7Z+TaZyEh3fMot5oqkSfHyRX4QMYa+m1MKb5wre4XE6Y9r/FSUIz9EsmIEyLA9ThJcyug6PxxiffredX1cVKaErJN2ScKZhH1bxq5AhLDPbGZfH+FrYWZVxNEwvcHJ5S+YhEB/lzsOyzBDWaBvsqHoPCFWhqyoXZHmb/O5ljHBtfoLk1xxfSkZpRLXbo1SYmgqqvVy/nqDsfvZ4hhTFfM2Lh71Z7GkeFLzL4UI4P6aRW8FKdp+w8oJqWzeZjhZk3X8SdPk1SYa+38x/ot7pTDEV8yIvK73AYU9lIj7pX3w7Pr+CjHb3l/5VdJx/4Q3CyoO8zdrMHY6Gob5CKFROZ9g0kfmy+z2YJOxVKnFUfIsQlh4Kyh3cuyeGcDqX7+VqGDbeJiRpDz7KnNxJxYTje0wWTFjeTq1cwsvxeNvLe0h4VkMP08r5CdrmbzmEl1UTo9otDZJ7SFiW6bb91NyuFrKEZzOMTmoYv8CHPSS8oCslQXiSg/CfJaziWrlydovuoQn2kPBWntOfJ9sMLkt4H/wIFo17SHgeLCROwzVVhvBMDtLzKxleWdhDwh4ZhLflVxRMsxzCyn2QopHO3k9CofKEMUZydRsOsqP0GMPe2+VMhgXTPhIKvaOaYkaxPUt4JeOnowsTyRAu9pJQqJwo8YeceHhKO3lGTx8mIQn5Cj4NRvGBEpJDeZu3HirhKSfcQf15hGeXgc5e0WESmrGUAyXEkWQll3B6RvWXsqeEtfJVrG3+liCk35zCXoC5p4R5G29JQhT28f2BEqLr21A7vZ8f60OEysVfZdD4Fcl79+szHyIk64lAyDxMQhmFUvacsJdPOH69DvWg7COhGbmOi1ouIaN4bbE/qiqx/0fme4Sne0g4v5djHSTh5Xms8SxNmH75dB8JWaV8aaX88vBQPWVfQzkswumTTGYowjXmq7WDIpwihM2X15msMO8tHhJhz9z+uswYMS8gHhLhKQ5XR+cmmsdnD4awN0cPoR+9RijEOiDCihm/6TaWo2F6WITRC2vT+CXSQyI8jl86LGMUvqZ5QITCC5qFLHNkhlPykAjJ5Ave1BduUfyW7CERCnOMT8aVs/MXGc2ixO2gCHtVkrQpCslsZvHvjRwUIbyaCa/n1a6Z1PuwCLev5yWIDo0w++UEJ9x1cUJOuPvihJxw9/UHEM5QLXHiHKd+P/hUvt9vwurTPHFi+vSU/D2Eq6fZXhNm/4RE+sQH/sYEFxcXFxcXF9cByAW9cflrpS7WAyNxYrIZ3Fjpuyb9m/XAb4yyj99EaoySJhgD34k+9NebBXOttF6X0kWN/PpwOGyuDS/X0Ml6OOi8zZKr/qOutzZsQeSEvUrdtGqpbV3T1YLNGA1qPLbVSPbdhmmaRktXtfCDAdWso2ueTT5OEiUZWkHXQLr92MzQE7tsYkDhC4jPmiiKBabEJpx4ZJtxUrQlcSupXUj0eDG6QtUuxiWtyKVWiS210I9wbFFUG0w53kplStJsP2PoQIcLxc8T1qFqrR6Nr74tppA7mhbASdQGqcDWTgmlQNS2osVeKiQIJT3sNkNNEk4kTQwLogd2soPhDnqhldO7HyEU7bB1na6UIuzQoiVV6nbFoJ3ZBgYMcgUkqnBRvfk9oagNrVxCp0gvq8XVcFWklWSGo9+mzawPvkgoFbfTax0UFBNatHLNNiaW5fU1SmHHDgcw7JFrEXmNAm39NwhFdZBLuIQRKD0aYISz6NqarqW8jSVCU0InJv3AhwlFvU4/jVQxRbiBM+3ncBT7lEKMBnUCYwQjvOXlXdoSinYjh3AEhWpiBGUM6+kuhIkrwcxuZ2foxwi3/RI6jsgyqwWVN+MwsIFOtiPHn8AQHuHRUd6lkFAMPGiSEC5KIjPzsoEPhm67RKZQNNo+TSh1haClkoTU8bB+3YKJqi+/REi9TddKE3riu32zIL2sr4U1Gc228daNvyOEniNPetBSWoIQytSa7ANgnFjIJfTu3h6ldLq1B2lCOrjt/DC/FcQ0tSSUCKg0/GRqA4TaAOpXPcDRB0PGMncIRSdaDWrJx3DoaFNz4eGS7g1giENATRA2VJhjgd2lYZFqmQAukbmikSzEBWttNjf6IGFhAuFUop5/RYdhRAjn1ESu5rTShPrGIGosadxUo9GWJZzQBpP0UZLwpg2NTA8tWwtiq66ziSOYR8FgtEqphOtDhCUaBqXA4bCWueIHCEUdUra2Boda9/cRn8T7SeD03d8RTh7DtIaJSIKnS9D0kT2fi/oBYehjyGxOEoKDVvvsA5MsYax2N649j1DowxjXl0Y7PUqD2eWu7Ha7DWWyzeqTG3Sfrjx8/dNRf0so1GnQtZ2UZeActDr7APWudyyGGOZaorZhXHkuobAGR6XDkEl6mkLwpNMgi5RhcuDQeSPqLRBYKd59KmCEhA71g4u0ZdRzPrKhCno1ZqZzF1wDTRV01j/kEwqr0HlHhDTl1Jn1zUZPEEYxLBopn4r6IaFgtHS7nrHMeUxF/Iadifh2hwwgaoa2YhB/Q0ijn8gSCtT/SHEakyJMzQRon8z69SOEQr/uuxnLgtGrrsMi+xrttJysjUYCPV6k/I5QWOhpwgW0jhQvvNYaS0gHsV4IpYufjPoxYa5lgkddpLrqg+mdJV0pMhEpvtkd0rbY5JfDEAq+nSJ06SJVKtzQEdBZ6wlPA4+2/U4ocDvaZ6L+e4RCv0UHht0qFm3agGJhk3tzMPziVe5vCYWmniQk63c6ENWWXizeBZVEC8TAd8c1OsFy5uOEz+8RCsZdMA+2/lJK7HmwN4/AWUlabjkJQkuTkoRCyU6sskl/Rpkv9GjCtcBKMZlIvi3ow8fEghp88yPrj0fFeIdB0tuJOQCeMdryMCDYPbKXopwdCNXIDXUKUmoyTYbMLgZZbt+Ew9AlT0oaa+CkEKRwH9WioNrDxJl+QS08J844fhFSFpJL2eJg8sbNg4J6FzV3/47Z0QJPzbR7w1ZtKRHVXGOlqlCHpqpFn3HJjZZmL9k7hU1BZyfKuxrdGG76TD89kZ2R3ywWh+tFZgXQaSyYm0cNJi0erRuxV1+sE9V0Go102HZLjfqq2F02OslYYNQbKXMaz2mTubi4uLi4uPZYzptbjB/UgKzPaRI4af6zPKGvFVuN92/byvkbNgbeuX/Uvfk/5C5D17V8mjHSLMoLcil3EmROHm1EusvlxqctIbtR0m86gkuX0Nur8aNW8CMpV2h2SJmu68LdlhMU7G7rD35s+lZc0rZcy/IiKz9ICP81yXLLgmS2sRzAF7WT5rIJCaZfX9ZJYZBsGuSWUnP9TBJvd+1nV6B3IcRkAEW4m/pyQ27yR0Lpl+AOckxqQg4/Wa7J3aP6gH7tW18uV7Dy85dLksBPus01aYP1cjmARlr6S1ewVoP6wF8O+9ny3iRckPIc2KP7jwMN5ZLqLFL/gpwyCHipLrh3pC5iEzGXrOb9aG0T7ed0oRR/Alue1EY/+DfaCH7BcaLVC/tlMxxP6H4B6cwRVN8l7QGT5b8u7fUGbN2AAVCSRbfenYIjEHrvE6snWnejsSUc6XVSr7c1CI6tX6SulUcsFSxpsx4UCWk96hHvV4h6Rz6UbkjTluhiioxZwRtAY3nNRd8Im9yqx+OVEpbowmi0ajah+pUjWDA8+hrd1acvRiwnQekW/YLbWdHhZCU2ON8ndFrWlpBUqbmkmGDq+AYMI3KyMxh4UIdLT7uDnPn/DH3RB0JaznIECyZy4K8bbr2ZN28CQrjbfXYEb80Qghkh4ZoU3HmGpo4IF58j9P01HfvOEsaf0QdkY7hYw8Ad3ixWdFytaFP3f41gvLjLnM08b7hZ+KtJ2CveyjBWdKLdTYTn3E3qYdyHA7+0hIMuIVzBdOgbwOODXV7XMIakJOtvStilbsH6xC6GVyqVaAvTKeUs+vTDxKDvxljbj0Jp+yM4nfu9gTUyFo4QTc2wJIFYOUm/dhAURmugl0g9Hhx0yCmYe15/AY3o0ZZ0+n0vLrcTeNLPv7DAxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXF9SfqfwdYgxiroTiyAAAAAElFTkSuQmCC" alt="Moringa School" className="rounded-lg shadow-lg mb-4"/>
    <img src=''/>
      </div>
      <p className="text-gray-300 text-lg md:text-xl">
        Completed a comprehensive program covering both front-end and back-end development, including technologies such as JavaScript, React, Node.js, Python, and Flask. Developed several full-stack projects, gaining hands-on experience in building scalable web applications.
      </p>
      <ul className="list-disc list-inside text-gray-300 text-lg md:text-xl mt-4 space-y-2">
        <li>In-depth training in modern JavaScript frameworks and libraries.</li>
        <li>Hands-on experience with databases such as MySQL and PostgreSQL.</li>
        <li>Collaborative projects simulating real-world software development environments.</li>
        <li>Comprehensive understanding of software development lifecycle and agile methodologies.</li>
      </ul>
  
    </div>
  );
}

export default Education;


const select = document.querySelector("select");
const successInput = document.querySelector("input");
const submitBtn = document.querySelector("button");
const output = document.querySelector(".output");

const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];


const FormComponent = class {
  constructor() {
    this.success = "";
    this.status = "";
  }

  start() {
    oppoStatus.forEach((obj) => {
      const newOption = document.createElement("option");
      const optionText = document.createTextNode(obj.STATUS);
      newOption.appendChild(optionText);
      newOption.setAttribute("value", obj.K_OPPO_STATUS);
      select.appendChild(newOption);
    });

    this.onChange();
    this.display();
  }

  onChange() {
    select.addEventListener("change", (e) => {
      const status = Number(e.target.value)
      const res = oppoStatus.find(
        (el) => el.K_OPPO_STATUS === status
      ).SUCCESS;

      successInput.value = res;

      this.success = res;
      this.status = status
    });
  }

  display() {
    submitBtn.addEventListener("click", (e) => {
      output.textContent = JSON.stringify({
        status: this.status,
        success: this.success,
      });

      e.preventDefault();
    });
  }
  
};

const fc = new FormComponent();
fc.start();

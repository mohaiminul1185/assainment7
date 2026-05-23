// script.js

const tickets = [

  {
    id:"#1001",
    title:"Login Issues - Can't Access Account",
    description:"Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
    priority:"HIGH PRIORITY",
    priorityClass:"high",
    status:"Open",
    statusClass:"open",
    customer:"John Smith",
    date:"11/15/2024"
  },

  {
    id:"#1002",
    title:"Payment Failed - Card Declined",
    description:"Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
    priority:"HIGH PRIORITY",
    priorityClass:"high",
    status:"Open",
    statusClass:"open",
    customer:"Sarah Johnson",
    date:"11/16/2024"
  },

  {
    id:"#1003",
    title:"Unable to Download Invoice",
    description:"Customer cannot download their January invoice from the billing section. The download button is...",
    priority:"MEDIUM PRIORITY",
    priorityClass:"medium",
    status:"In-Progress",
    statusClass:"progress",
    customer:"Michael Brown",
    date:"11/17/2024"
  },

  {
    id:"#1004",
    title:"Incorrect Billing Address",
    description:"Customer's billing address shows a different city. They updated it but it still displays the old one.",
    priority:"LOW PRIORITY",
    priorityClass:"low",
    status:"Open",
    statusClass:"open",
    customer:"Emily Davis",
    date:"11/18/2024"
  },

  {
    id:"#1005",
    title:"App Crash on Launch",
    description:"Customer reports that the mobile app crashes immediately upon opening on Android 13.",
    priority:"HIGH PRIORITY",
    priorityClass:"high",
    status:"Open",
    statusClass:"open",
    customer:"David Wilson",
    date:"11/19/2024"
  },

  {
    id:"#1006",
    title:"Refund Not Processed",
    description:"Customer requested a refund two weeks ago but has not received the amount yet.",
    priority:"MEDIUM PRIORITY",
    priorityClass:"medium",
    status:"In-Progress",
    statusClass:"progress",
    customer:"Sophia Taylor",
    date:"11/20/2024"
  },

  {
    id:"#1007",
    title:"Two-Factor Authentication Issue",
    description:"Customer is not receiving 2FA codes on their registered phone number.",
    priority:"HIGH PRIORITY",
    priorityClass:"high",
    status:"Open",
    statusClass:"open",
    customer:"James Anderson",
    date:"11/21/2024"
  },

  {
    id:"#1008",
    title:"Unable to Update Profile Picture",
    description:"Customer tries to upload a new profile picture but gets 'Upload failed' error.",
    priority:"LOW PRIORITY",
    priorityClass:"low",
    status:"Open",
    statusClass:"open",
    customer:"Olivia Martinez",
    date:"11/22/2024"
  },

  {
    id:"#1009",
    title:"Subscription Auto-Renewal",
    description:"Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
    priority:"MEDIUM PRIORITY",
    priorityClass:"medium",
    status:"In-Progress",
    statusClass:"progress",
    customer:"Liam Thomas",
    date:"11/17/2024"
  },

  {
    id:"#1010",
    title:"Missing Order Confirmation Email",
    description:"Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
    priority:"MEDIUM PRIORITY",
    priorityClass:"medium",
    status:"Open",
    statusClass:"open",
    customer:"Isabella Garcia",
    date:"11/24/2024"
  }

];

const ticketsContainer =
document.getElementById("ticketsContainer");

const taskStatus =
document.getElementById("taskStatus");

const resolvedList =
document.getElementById("resolvedList");

const progressCount =
document.getElementById("progressCount");

const resolvedCount =
document.getElementById("resolvedCount");

let progress = 0;
let resolved = 0;

/* TOAST */

function showToast(message,color){

  Toastify({

    text:message,

    duration:2500,

    gravity:"top",

    position:"right",

    style:{
      background:color
    }

  }).showToast();

}

/* RENDER */

function renderTickets(){

  ticketsContainer.innerHTML = "";

  tickets.forEach((ticket,index)=>{

    const card =
    document.createElement("div");

    card.classList.add("ticket-card");

    card.innerHTML = `

      <div class="ticket-header">

        <h3>${ticket.title}</h3>

        <span class="status ${ticket.statusClass}">
          ${ticket.status}
        </span>

      </div>

      <p class="ticket-desc">
        ${ticket.description}
      </p>

      <div class="ticket-bottom">

        <div class="left-meta">

          <span class="ticket-id">
            ${ticket.id}
          </span>

          <span class="priority ${ticket.priorityClass}">
            ${ticket.priority}
          </span>

        </div>

        <div class="right-meta">

          <span>${ticket.customer}</span>

          <span>
            <i class="fa-regular fa-calendar"></i>
            ${ticket.date}
          </span>

        </div>

      </div>

    `;

    card.addEventListener("click",()=>{

      addTask(ticket,index);

    });

    ticketsContainer.appendChild(card);

  });

}

/* ADD TASK */

function addTask(ticket,index){

  const exists =
  document.getElementById(`task-${index}`);

  if(exists){

    showToast(
      "Already Added",
      "#EF4444"
    );

    return;
  }

  const task =
  document.createElement("div");

  task.classList.add("task-item");

  task.id = `task-${index}`;

  task.innerHTML = `

    <h4>${ticket.title}</h4>

    <button
      class="complete-btn"
      onclick="completeTask(${index})"
    >
      Complete
    </button>

  `;

  taskStatus.appendChild(task);

  progress++;

  progressCount.innerText = progress;

  showToast(
    "Task Added Successfully",
    "#7C3AED"
  );

}

/* COMPLETE */

function completeTask(index){

  const task =
  document.getElementById(`task-${index}`);

  task.remove();

  progress--;

  resolved++;

  progressCount.innerText = progress;

  resolvedCount.innerText = resolved;

  document.querySelector(".empty-text").style.display = "none";

  resolvedList.innerHTML += `

    <div class="task-item">
      Ticket Resolved
    </div>

  `;

  showToast(
    "Task Completed",
    "#16A34A"
  );

}

/* INIT */

renderTickets();
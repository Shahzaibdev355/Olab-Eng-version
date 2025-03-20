import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "1m", target: 10 }, // Ramp up to 10 virtual users over 1 minute
    { duration: "3m", target: 10 }, // Stay at 10 virtual users for 3 minutes
    { duration: "1m", target: 0 },  // Ramp down to 0 virtual users over 1 minute
  ],
};

export default function () {
  const url = "https://api.cryptoverse-ai.com/api/v1/user/stabilityai/texttoimage"; // Replace with your Stable Diffusion endpoint

  const payload = JSON.stringify({
    text_prompts: [
      {
        text: "A futuristic cityscape at night",
        weight: 1.0
      }
    ],
    steps: 50,
    width: 512,
    height: 512,
    seed: 1234,
    samples: 1,
    cfg_scale: 7.5,
  });
  


  

  const params = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtb25nb2RiK3NydjovL3p1aGFpYmRldjoxMjIzMzM0NDQ0QGNsdXN0ZXIwLjZzOWo0Lm1vbmdvZGIubmV0L2NyeXB0by12ZXJzZT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMCIsImF1ZCI6Im1vbmdvZGIrc3J2Oi8venVoYWliZGV2OjEyMjMzMzQ0NDRAY2x1c3RlcjAuNnM5ajQubW9uZ29kYi5uZXQvY3J5cHRvLXZlcnNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwIiwic3ViIjoiNjc5MDA2YWUyYzA4ZTEzY2M2ZDUwODJmIiwiZGV2aWNlIjp7ImlwIjoiMC4wLjAuMCJ9LCJpYXQiOjE3Mzk2NDE0OTUsImV4cCI6MTczOTcyNzg5NSwicHJtIjoiOTliZDFhMDJhZDRiMzdmMmQzYzJmZmFjOGU3YjU3ZmZjN2ZmOGExYjJjNDY5YzgwOTdkZDkxYjEwY2E2MDE2ZWE3ODc1YmUwNGNjNWI5ZGViODdjNDhhMjM0MmRmMmQ2YmQyN2ZmMzUwZDBhZWM3NjAxOGRiNDk2ODAzZTg2MGUifQ.YpSn3eclX_tO9csa6amYRTGFDXgQcgqFwbLv7qVm6Rm8XXRIzc3vywM7L8T0ec8-IR3a5UCVrwoPUru8Act3Cw"
    },
  };

  const res = http.post(url, payload, params);

  // Check the response status
  check(res, {
    "is status 200": (r) => r.status === 200,
    "response contains image URL": (r) => r.json("images") !== undefined, // Assuming the API returns images in this field
  });

  sleep(1); // Pause for 1 second before the next request
}

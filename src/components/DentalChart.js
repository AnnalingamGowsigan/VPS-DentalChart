// In DentalChart.js
import React from "react";
import "./DentalChart.css";
import FrontTooth from "./FrontTooth";
import BackTooth from "./BackTooth";

// DentalChart component
const DentalChart = () => {
  // Render the DentalChart
  return (
    <div>
      {/* Upper Row */}
      <div className="dental-chart">
        <div>
          <p>18</p>
          <BackTooth className="back-tooth" />
        </div>
        <div>
          <p>17</p>
          <BackTooth className="back-tooth" />
        </div>
        <div>
          <p>16</p>
          <BackTooth className="back-tooth" />
        </div>
        <div>
          <p>15</p>
          <BackTooth className="back-tooth" />
        </div>
        <div>
          <p>14</p>
          <BackTooth className="back-tooth" />
        </div>
        <div>
          <p>13</p>
          <FrontTooth className="front-tooth" />
        </div>
        <div>
          <p>12</p>
          <FrontTooth className="front-tooth" />
        </div>
        <div>
          <p>11</p>
          <FrontTooth className="front-tooth" />
        </div>
        <div>
          <p>21</p>
          <FrontTooth className="front-tooth" />
        </div>
        <div>
          <p>22</p>
          <FrontTooth className="front-tooth" />
        </div>
        <div>
          <p>23</p>
          <FrontTooth className="front-tooth" />
        </div>
        <div>
          <p>24</p>
          <BackTooth className="back-tooth" />
        </div>
        <div>
          <p>25</p>
          <BackTooth className="back-tooth" />
        </div>
        <div>
          <p>26</p>
          <BackTooth className="back-tooth" />
        </div>
        <div>
          <p>27</p>
          <BackTooth className="back-tooth" />
        </div>
        <div>
          <p>28</p>
          <BackTooth className="back-tooth" />
        </div>
      </div>
      {/* Lower Row */}
      <div className="dental-chart">
        <div>
          <BackTooth className="back-tooth" />
          <p>48</p>
        </div>
        <div>
          <BackTooth className="back-tooth" />
          <p>47</p>
        </div>
        <div>
          <BackTooth className="back-tooth" />
          <p>46</p>
        </div>
        <div>
          <BackTooth className="back-tooth" />
          <p>45</p>
        </div>
        <div>
          <BackTooth className="back-tooth" />
          <p>44</p>
        </div>
        <div>
          <FrontTooth className="front-tooth" />
          <p>43</p>
        </div>
        <div>
          <FrontTooth className="front-tooth" />
          <p>42</p>
        </div>
        <div>
          <FrontTooth className="front-tooth" />
          <p>41</p>
        </div>
        <div>
          <FrontTooth className="front-tooth" />
          <p>31</p>
        </div>
        <div>
          <FrontTooth className="front-tooth" />
          <p>32</p>
        </div>
        <div>
          <FrontTooth className="front-tooth" />
          <p>33</p>
        </div>
        <div>
          <BackTooth className="back-tooth" />
          <p>34</p>
        </div>
        <div>
          <BackTooth className="back-tooth" />
          <p>35</p>
        </div>
        <div>
          <BackTooth className="back-tooth" />
          <p>36</p>
        </div>
        <div>
          <BackTooth className="back-tooth" />
          <p>37</p>
        </div>
        <div>
          <BackTooth className="back-tooth" />
          <p>38</p>
        
      </div>
      </div>
    </div>
  );
};

export default DentalChart;

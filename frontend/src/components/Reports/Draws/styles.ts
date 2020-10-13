import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;

  #pages {
    width: 100% !important;
    display: flex;
    align-items: center;
  }

  table {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #3f51b5;
    color: white;
  }
`;
export const Caption = styled.caption`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

export const ContainerPrint = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const GlobalCSSPRINT = createGlobalStyle`
  @media print { 
    #root > div > div { 
      display:none;
    }
    #root > div > header { 
      display:none;
    }
    
    #button-print { 
      display: none;
    }
    #draw-select{
      display: none;
    }
  }
`;

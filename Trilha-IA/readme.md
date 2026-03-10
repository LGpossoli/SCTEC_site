# Análise Exploratória de Dados – Uber Ride Analytics

## 1. Objetivo

Este projeto tem como objetivo realizar uma Análise Exploratória de Dados (AED) utilizando o conjunto de dados **Uber Ride Analytics Dashboard**, disponibilizado na plataforma Kaggle. A análise busca compreender padrões de utilização do serviço de transporte por aplicativo, identificar características relevantes das corridas e explorar variáveis importantes presentes no conjunto de dados.

A partir dessa análise exploratória, é possível entender o comportamento dos usuários, identificar tendências de uso do serviço e observar relações entre diferentes variáveis do dataset. Esse tipo de análise é uma etapa fundamental em projetos de ciência de dados, pois permite conhecer a estrutura dos dados antes da aplicação de técnicas mais avançadas de análise ou modelos de Inteligência Artificial.

---

## 2. Conjunto de Dados

O conjunto de dados utilizado neste projeto foi obtido no Kaggle e contém aproximadamente **102 mil registros de corridas realizadas por meio do aplicativo Uber**. Cada registro representa uma corrida individual e inclui diversas informações relacionadas à viagem.

Entre as principais variáveis presentes no dataset estão:

- **Date** – data da corrida  
- **Time** – horário da corrida  
- **Booking ID** – identificador da corrida  
- **Booking Status** – status da corrida (Completed, Cancelled, No Driver Found, etc.)  
- **Customer ID** – identificador do cliente  
- **Vehicle Type** – tipo de veículo utilizado  
- **Pickup Location** – local de embarque  
- **Drop Location** – local de destino  
- **Avg VTAT** – tempo médio até a chegada do motorista  
- **Avg CTAT** – tempo total da corrida  
- **Booking Value** – valor da corrida  
- **Payment Method** – método de pagamento utilizado  

Essas variáveis permitem realizar diversas análises relacionadas ao comportamento das corridas, distribuição de valores e padrões de utilização do serviço.

---

## 3. Tecnologias Utilizadas

O projeto foi desenvolvido utilizando a linguagem **Python** e algumas das bibliotecas mais utilizadas para análise de dados:

- **Python**
- **Pandas** – manipulação e análise de dados
- **NumPy** – operações numéricas
- **Matplotlib** – geração de gráficos
- **Seaborn** – visualização estatística de dados
- **Jupyter Notebook** – ambiente de desenvolvimento para análise exploratória

Essas ferramentas permitem realizar desde o tratamento inicial dos dados até a criação de visualizações que facilitam a interpretação das informações.

---

## 4. Etapas do Projeto

O desenvolvimento da análise seguiu algumas etapas principais:

### 4.1 Carregamento dos dados
O dataset foi importado para o ambiente Python utilizando a biblioteca **Pandas**, permitindo a manipulação das informações em formato de DataFrame.

### 4.2 Exploração inicial dos dados
Foram realizadas verificações iniciais para compreender a estrutura do dataset, incluindo:

- visualização das primeiras linhas do dataset
- identificação dos tipos de dados das colunas
- análise de valores nulos
- estatísticas descritivas das variáveis numéricas

### 4.3 Limpeza e preparação dos dados
Alguns ajustes foram realizados para garantir que os dados estivessem adequados para análise, incluindo tratamento de valores ausentes e organização das variáveis utilizadas nas visualizações.

### 4.4 Análise exploratória
Foram criados diferentes gráficos para analisar o comportamento das corridas e identificar padrões relevantes no conjunto de dados.

---

## 5. Análises Realizadas

Durante o projeto foram realizadas diversas análises exploratórias, incluindo:

### Distribuição do status das corridas
Análise da proporção de corridas concluídas, canceladas ou incompletas, permitindo compreender possíveis problemas de disponibilidade de motoristas ou cancelamentos frequentes.

### Corridas por tipo de veículo
Avaliação de quais tipos de veículos são mais utilizados pelos usuários, como **Auto, Bike, Go Sedan, Go Mini, Premier Sedan e Uber XL**.

### Valor médio das corridas por tipo de veículo
Comparação entre os valores médios das corridas para diferentes categorias de veículos disponíveis no serviço.

### Corridas por horário do dia
Análise da distribuição das corridas ao longo das horas do dia, permitindo identificar períodos de maior demanda.

### Distribuição dos valores das corridas
Visualização da distribuição dos valores das corridas utilizando histogramas e boxplots, permitindo identificar padrões e possíveis valores extremos.

---

## 6. Principais Resultados

A análise exploratória permitiu identificar alguns padrões importantes no conjunto de dados:

- Determinados tipos de veículos apresentam maior volume de corridas, indicando preferência dos usuários por categorias específicas.
- A distribuição das corridas ao longo do dia mostra horários com maior concentração de viagens, caracterizando períodos de maior demanda.
- O valor médio das corridas entre diferentes tipos de veículos apresenta variações relativamente pequenas.
- A análise do status das corridas permite observar a presença de cancelamentos e corridas incompletas, o que pode indicar dificuldades na disponibilidade de motoristas em determinadas situações.

Essas informações ajudam a compreender melhor o comportamento do sistema de transporte por aplicativo e o padrão de uso pelos clientes.

---

## 7. Possíveis Aplicações em Inteligência Artificial

Embora este projeto tenha foco em **Análise Exploratória de Dados**, os padrões identificados podem ser utilizados futuramente em aplicações de Inteligência Artificial e aprendizado de máquina.

Alguns exemplos de possíveis aplicações incluem:

- **Modelos de previsão de demanda**, para estimar a quantidade de corridas em determinados horários ou regiões.
- **Modelos de classificação**, para prever a probabilidade de cancelamento de uma corrida.
- **Modelos de regressão**, para estimar o valor ou a duração de uma corrida com base em variáveis como tipo de veículo, localização e horário.

A análise exploratória realizada neste projeto serve como base para esse tipo de desenvolvimento futuro.

---

## 8. Conclusão

A realização da Análise Exploratória de Dados permitiu compreender melhor as características do dataset de corridas da Uber e identificar padrões relevantes relacionados ao comportamento das viagens, tipos de veículos utilizados, horários de maior demanda e distribuição dos valores das corridas.

Esse tipo de análise é essencial em projetos de ciência de dados, pois fornece uma visão inicial do conjunto de dados e auxilia na identificação de variáveis importantes para futuras análises ou modelos preditivos.

O projeto também demonstra o uso de ferramentas amplamente utilizadas na área de análise de dados e ciência de dados, como Python, Pandas, Matplotlib e Seaborn, contribuindo para o desenvolvimento de habilidades práticas no tratamento e interpretação de dados.

---
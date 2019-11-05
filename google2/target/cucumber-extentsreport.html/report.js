$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Consultar.feature");
formatter.feature({
  "line": 1,
  "name": "Buscar Termo",
  "description": "",
  "id": "buscar-termo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9227758100,
  "status": "passed"
});
formatter.before({
  "duration": 7069565300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Busca Termo Unico com Enter",
  "description": "",
  "id": "buscar-termo;busca-termo-unico-com-enter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "que acesso o site do Google1",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "digito o termo \"feriado\" e pressiono Enter1",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#\tAnd pressiono o Enter"
    }
  ],
  "line": 7,
  "name": "vejo os resultados e a guia \"feriado - Pesquisa Google\" 1",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarPO.que_acesso_o_site_do_Google()"
});
formatter.result({
  "duration": 4823181700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "feriado",
      "offset": 16
    }
  ],
  "location": "ConsultarPO.digito_o_termo_e_pressiono_Enter(String)"
});
formatter.result({
  "duration": 5172895400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "feriado - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "ConsultarPO.vejo_os_resultados_e_a_guia(String)"
});
formatter.result({
  "duration": 143742200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[feriado - Pesquisa Google]\u003e but was:\u003c[Feriados nacionais para o ano de 2019]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat google2.ConsultarPO.vejo_os_resultados_e_a_guia(ConsultarPO.java:81)\r\n\tat ✽.Then vejo os resultados e a guia \"feriado - Pesquisa Google\" 1(Consultar.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1500238000,
  "status": "passed"
});
formatter.after({
  "duration": 1271543500,
  "status": "passed"
});
formatter.uri("ConsultarPO.feature");
formatter.feature({
  "line": 1,
  "name": "Buscar Termo",
  "description": "",
  "id": "buscar-termo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6136041200,
  "status": "passed"
});
formatter.before({
  "duration": 7240333200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Busca Termo Unico com Enter",
  "description": "",
  "id": "buscar-termo;busca-termo-unico-com-enter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "que acesso o site do Google",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "digito o termo \"geladeira\" e pressiono Enter",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#\tAnd pressiono o Enter"
    }
  ],
  "line": 7,
  "name": "vejo os resultados e a guia \"feriado - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Consultar.que_acesso_o_site_do_Google()"
});
formatter.result({
  "duration": 2678913100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "geladeira",
      "offset": 16
    }
  ],
  "location": "Consultar.digito_o_termo_e_pressiono_Enter(String)"
});
formatter.result({
  "duration": 4931343300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "feriado - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "Consultar.vejo_os_resultados_e_a_guia(String)"
});
formatter.result({
  "duration": 81242200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[feriado] - Pesquisa Google\u003e but was:\u003c[geladeira] - Pesquisa Google\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat google2.Consultar.vejo_os_resultados_e_a_guia(Consultar.java:72)\r\n\tat ✽.Then vejo os resultados e a guia \"feriado - Pesquisa Google\"(ConsultarPO.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2007515400,
  "status": "passed"
});
formatter.after({
  "duration": 1295224400,
  "status": "passed"
});
formatter.uri("ConsultarPT.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Buscar por termo",
  "description": "Se aplica a qualquer usuario",
  "id": "buscar-por-termo",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 6406324700,
  "status": "passed"
});
formatter.before({
  "duration": 6666838600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Busca com sucesso por uma unica palavra",
  "description": "",
  "id": "buscar-por-termo;busca-com-sucesso-por-uma-unica-palavra",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 6,
  "name": "que acesso o site do Google",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "digito o termo \"feriado\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "clico no Enter",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "exibe a lista de resultados com o titulo \"feriado - Pesquisa Google\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "Consultar.que_acesso_o_site_do_Google()"
});
formatter.result({
  "duration": 2634838100,
  "status": "passed"
});
});
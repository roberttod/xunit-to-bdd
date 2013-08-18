{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "params": [],
          "defaults": [],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "testCase",
                      "range": [
                        71,
                        79
                      ]
                    },
                    "init": {
                      "type": "Identifier",
                      "name": "TestCase",
                      "range": [
                        82,
                        90
                      ]
                    },
                    "range": [
                      71,
                      90
                    ]
                  }
                ],
                "kind": "var",
                "range": [
                  67,
                  91
                ]
              },
              {
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "somethingFunny",
                      "range": [
                        99,
                        113
                      ]
                    },
                    "init": {
                      "type": "Identifier",
                      "name": "assertEquals",
                      "range": [
                        116,
                        128
                      ]
                    },
                    "range": [
                      99,
                      128
                    ]
                  }
                ],
                "kind": "var",
                "range": [
                  95,
                  129
                ]
              },
              {
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "ExampleTest",
                      "range": [
                        137,
                        148
                      ]
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "testCase",
                        "range": [
                          151,
                          159
                        ]
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "ExampleTest",
                          "raw": "\"ExampleTest\"",
                          "range": [
                            160,
                            173
                          ]
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "setUp",
                                "range": [
                                  181,
                                  186
                                ]
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "defaults": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "range": [
                                              207,
                                              211
                                            ]
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "somethingTrue",
                                            "range": [
                                              212,
                                              225
                                            ]
                                          },
                                          "range": [
                                            207,
                                            225
                                          ]
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": true,
                                          "raw": "true",
                                          "range": [
                                            228,
                                            232
                                          ]
                                        },
                                        "range": [
                                          207,
                                          232
                                        ]
                                      },
                                      "range": [
                                        207,
                                        233
                                      ]
                                    }
                                  ],
                                  "range": [
                                    199,
                                    239
                                  ]
                                },
                                "rest": null,
                                "generator": false,
                                "expression": false,
                                "range": [
                                  188,
                                  239
                                ]
                              },
                              "kind": "init",
                              "range": [
                                181,
                                239
                              ]
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "tearDown",
                                "range": [
                                  245,
                                  253
                                ]
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "defaults": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "range": [
                                              274,
                                              278
                                            ]
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "somethingLeftOver",
                                            "range": [
                                              279,
                                              296
                                            ]
                                          },
                                          "range": [
                                            274,
                                            296
                                          ]
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null",
                                          "range": [
                                            299,
                                            303
                                          ]
                                        },
                                        "range": [
                                          274,
                                          303
                                        ]
                                      },
                                      "range": [
                                        274,
                                        304
                                      ]
                                    }
                                  ],
                                  "range": [
                                    266,
                                    310
                                  ]
                                },
                                "rest": null,
                                "generator": false,
                                "expression": false,
                                "range": [
                                  255,
                                  310
                                ]
                              },
                              "kind": "init",
                              "range": [
                                245,
                                310
                              ]
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "test_assertTrue",
                                "range": [
                                  316,
                                  331
                                ]
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "defaults": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "assertTrue",
                                          "range": [
                                            353,
                                            363
                                          ]
                                        },
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": "Really obvious",
                                            "raw": "\"Really obvious\"",
                                            "range": [
                                              364,
                                              380
                                            ]
                                          },
                                          {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "ThisExpression",
                                              "range": [
                                                382,
                                                386
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "somethingTrue",
                                              "range": [
                                                387,
                                                400
                                              ]
                                            },
                                            "range": [
                                              382,
                                              400
                                            ]
                                          }
                                        ],
                                        "range": [
                                          353,
                                          401
                                        ]
                                      },
                                      "range": [
                                        353,
                                        402
                                      ]
                                    }
                                  ],
                                  "range": [
                                    345,
                                    408
                                  ]
                                },
                                "rest": null,
                                "generator": false,
                                "expression": false,
                                "range": [
                                  333,
                                  408
                                ]
                              },
                              "kind": "init",
                              "range": [
                                316,
                                408
                              ]
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "test_assertSame",
                                "range": [
                                  414,
                                  429
                                ]
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "defaults": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "assertSame",
                                          "range": [
                                            451,
                                            461
                                          ]
                                        },
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": "Really obvious",
                                            "raw": "\"Really obvious\"",
                                            "range": [
                                              462,
                                              478
                                            ]
                                          },
                                          {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "range": [
                                              480,
                                              484
                                            ]
                                          },
                                          {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "range": [
                                              486,
                                              490
                                            ]
                                          }
                                        ],
                                        "range": [
                                          451,
                                          491
                                        ]
                                      },
                                      "range": [
                                        451,
                                        492
                                      ]
                                    }
                                  ],
                                  "range": [
                                    443,
                                    498
                                  ]
                                },
                                "rest": null,
                                "generator": false,
                                "expression": false,
                                "range": [
                                  431,
                                  498
                                ]
                              },
                              "kind": "init",
                              "range": [
                                414,
                                498
                              ]
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "test_assertEquals",
                                "range": [
                                  504,
                                  521
                                ]
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "defaults": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "assertEquals",
                                          "range": [
                                            543,
                                            555
                                          ]
                                        },
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": "Really obvious",
                                            "raw": "\"Really obvious\"",
                                            "range": [
                                              556,
                                              572
                                            ]
                                          },
                                          {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "range": [
                                              574,
                                              578
                                            ]
                                          },
                                          {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "range": [
                                              580,
                                              584
                                            ]
                                          }
                                        ],
                                        "range": [
                                          543,
                                          585
                                        ]
                                      },
                                      "range": [
                                        543,
                                        586
                                      ]
                                    }
                                  ],
                                  "range": [
                                    535,
                                    592
                                  ]
                                },
                                "rest": null,
                                "generator": false,
                                "expression": false,
                                "range": [
                                  523,
                                  592
                                ]
                              },
                              "kind": "init",
                              "range": [
                                504,
                                592
                              ]
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "test_somethingFunnyAssertEquals",
                                "range": [
                                  598,
                                  629
                                ]
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "defaults": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "somethingFunny",
                                          "range": [
                                            651,
                                            665
                                          ]
                                        },
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": "Really obvious",
                                            "raw": "\"Really obvious\"",
                                            "range": [
                                              666,
                                              682
                                            ]
                                          },
                                          {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "range": [
                                              684,
                                              688
                                            ]
                                          },
                                          {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "range": [
                                              690,
                                              694
                                            ]
                                          }
                                        ],
                                        "range": [
                                          651,
                                          695
                                        ]
                                      },
                                      "range": [
                                        651,
                                        696
                                      ]
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "range": [
                                              703,
                                              707
                                            ]
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "somethingLeftOver",
                                            "range": [
                                              708,
                                              725
                                            ]
                                          },
                                          "range": [
                                            703,
                                            725
                                          ]
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": true,
                                          "raw": "true",
                                          "range": [
                                            728,
                                            732
                                          ]
                                        },
                                        "range": [
                                          703,
                                          732
                                        ]
                                      },
                                      "range": [
                                        703,
                                        733
                                      ]
                                    }
                                  ],
                                  "range": [
                                    643,
                                    739
                                  ]
                                },
                                "rest": null,
                                "generator": false,
                                "expression": false,
                                "range": [
                                  631,
                                  739
                                ]
                              },
                              "kind": "init",
                              "range": [
                                598,
                                739
                              ]
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "test_assertNull",
                                "range": [
                                  745,
                                  760
                                ]
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "defaults": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "assertNull",
                                          "range": [
                                            782,
                                            792
                                          ]
                                        },
                                        "arguments": [
                                          {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "ThisExpression",
                                              "range": [
                                                793,
                                                797
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "somethingLeftOver",
                                              "range": [
                                                798,
                                                815
                                              ]
                                            },
                                            "range": [
                                              793,
                                              815
                                            ]
                                          }
                                        ],
                                        "range": [
                                          782,
                                          816
                                        ]
                                      },
                                      "range": [
                                        782,
                                        817
                                      ]
                                    }
                                  ],
                                  "range": [
                                    774,
                                    823
                                  ]
                                },
                                "rest": null,
                                "generator": false,
                                "expression": false,
                                "range": [
                                  762,
                                  823
                                ]
                              },
                              "kind": "init",
                              "range": [
                                745,
                                823
                              ]
                            }
                          ],
                          "range": [
                            175,
                            827
                          ]
                        }
                      ],
                      "range": [
                        151,
                        828
                      ]
                    },
                    "range": [
                      137,
                      828
                    ]
                  }
                ],
                "kind": "var",
                "range": [
                  133,
                  829
                ]
              }
            ],
            "range": [
              62,
              832
            ]
          },
          "rest": null,
          "generator": false,
          "expression": false,
          "range": [
            52,
            832
          ]
        },
        "arguments": [],
        "range": [
          52,
          834
        ]
      },
      "range": [
        51,
        836
      ]
    }
  ],
  "range": [
    51,
    836
  ]
}
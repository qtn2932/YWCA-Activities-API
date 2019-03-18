
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Chapters').del()
    .then(function () {
      // Inserts seed entries
      return knex('Chapters').insert([
        {Name: 'YWCA Annapolis',State:null,City:null},
        {Name: 'YWCA Bethlehem',State:null,City:null},
        {Name: 'YWCA Binghamton & Broome County',State:null,City:null},
        {Name: 'YWCA Central Carolinas',State:null,City:null},
        {Name: 'YWCA Central Virginia',State:null,City:null},
        {Name: 'YWCA Greater Harrisburg',State:null,City:null},
        {Name: 'YWCA Greater Johnstown ',State:null,City:null},
        {Name: 'YWCA Jamestown',State:null,City:null},
        {Name: 'YWCA Metropolitan Phoenix',State:null,City:null},
        {Name: 'YWCA Nashville & Middle Tennessee',State:null,City:null},
        {Name: 'YWCA Northwest Indiana',State:null,City:null},
        {Name: 'YWCA Northwest Ohio',State:null,City:null},
        {Name: 'YWCA Palm Beach',State:null,City:null},
        {Name: 'YWCA Pierce County',State:null,City:null},
        {Name: 'YWCA Rock County',State:null,City:null},
        {Name: 'YWCA Silicon Valley',State:null,City:null},
        {Name: 'YWCA Southeast Wisconsin',State:null,City:null},
        {Name: 'YWCA Southeastern Massachusetts',State:null,City:null},
        {Name: 'YWCA Titusville',State:null,City:null},
        {Name: 'YWCA University of Illinois',State:null,City:null},
        {Name: 'YWCA WATSONVILLE ',State:null,City:null},
        {Name: 'YWCA Wausau',State:null,City:null},
        {Name: 'YWCA White Plains &Central Westchester',State:null,City:null},
        {Name: 'YWCA Yakima',State:null,City:null},
        {Name: 'YWCA Adams County',State:null,City:null},
        {Name: 'YWCA Alaska',State:null,City:null},
        {Name: 'YWCA Allentown',State:null,City:null},
        {Name: 'YWCA Alliance',State:null,City:null},
        {Name: 'YWCA Ames-ISU',State:null,City:null},
        {Name: 'YWCA Asheville',State:null,City:null},
        {Name: 'YWCA Beaumont',State:null,City:null},
        {Name: 'YWCA Bellingham',State:null,City:null},
        {Name: 'YWCA Bergen County ',State:null,City:null},
        {Name: 'YWCA Berkeley/Oakland',State:null,City:null},
        {Name: 'YWCA Billings',State:null,City:null},
        {Name: 'YWCA Black Hawk County',State:null,City:null},
        {Name: 'YWCA Boston',State:null,City:null},
        {Name: 'YWCA Boulder County',State:null,City:null},
        {Name: 'YWCA Bradford',State:null,City:null},
        {Name: 'YWCA Brooklyn',State:null,City:null},
        {Name: 'YWCA BUCKS ',State:null,City:null},
        {Name: 'YWCA Butler',State:null,City:null},
        {Name: 'YWCA Cambridge',State:null,City:null},
        {Name: 'YWCA Canton IL',State:null,City:null},
        {Name: 'YWCA Canton, Canton, Ohio',State:null,City:null},
        {Name: 'YWCA Carlisle',State:null,City:null},
        {Name: 'YWCA Cass Clay',State:null,City:null},
        {Name: 'YWCA Central Alabama',State:null,City:null},
        {Name: 'YWCA Central Indiana',State:null,City:null},
        {Name: 'YWCA Central Maine ',State:null,City:null},
        {Name: 'YWCA Central Mass.',State:null,City:null},
        {Name: 'YWCA Charleston, WV',State:null,City:null},
        {Name: 'YWCA Clark County',State:null,City:null},
        {Name: 'YWCA Clinton',State:null,City:null},
        {Name: 'YWCA Columbus',State:null,City:null},
        {Name: 'YWCA Corpus Christi',State:null,City:null},
        {Name: 'YWCA Cortland',State:null,City:null},
        {Name: 'YWCA Darien/Norwalk',State:null,City:null},
        {Name: 'YWCA Dayton ',State:null,City:null},
        {Name: 'YWCA Delaware',State:null,City:null},
        {Name: 'YWCA Duluth',State:null,City:null},
        {Name: 'YWCA El Paso del Norte Region',State:null,City:null},
        {Name: 'YWCA Elgin',State:null,City:null},
        {Name: 'YWCA Elmira',State:null,City:null},
        {Name: 'ywca elyria',State:null,City:null},
        {Name: 'YWCA Elyria',State:null,City:null},
        {Name: 'YWCA Enid',State:null,City:null},
        {Name: 'YWCA Evanston/North Shore',State:null,City:null},
        {Name: 'YWCA Evansville',State:null,City:null},
        {Name: 'YWCA Gettysburg & Adams County',State:null,City:null},
        {Name: 'YWCA Glendale',State:null,City:null},
        {Name: 'YWCA Grand Island',State:null,City:null},
        {Name: 'YWCA Great Falls',State:null,City:null},
        {Name: 'YWCA GREAT LAKES BAY REGION',State:null,City:null},
        {Name: 'YWCA Greater Austin',State:null,City:null},
        {Name: 'YWCA Greater Baton Rouge ',State:null,City:null},
        {Name: 'YWCA Greater Capital Region',State:null,City:null},
        {Name: 'YWCA Greater Charleston',State:null,City:null},
        {Name: 'YWCA Greater Cincinnati',State:null,City:null},
        {Name: 'YWCA Greater Cleveland',State:null,City:null},
        {Name: 'YWCA Greater Flint',State:null,City:null},
        {Name: 'YWCA Greater Lafayette',State:null,City:null},
        {Name: 'YWCA Greater Los Angeles',State:null,City:null},
        {Name: 'YWCA Greater Memphis',State:null,City:null},
        {Name: 'YWCA Greater Miami-Dade',State:null,City:null},
        {Name: 'YWCA Greater New Orleans',State:null,City:null},
        {Name: 'YWCA Greater Newburyport',State:null,City:null},
        {Name: 'YWCA Greater Pittsburgh',State:null,City:null},
        {Name: 'YWCA Greater Portland',State:null,City:null},
        {Name: 'YWCA Green Bay ',State:null,City:null},
        {Name: 'YWCA Greensboro',State:null,City:null},
        {Name: 'YWCA Greenwich',State:null,City:null},
        {Name: 'YWCA Hamilton',State:null,City:null},
        {Name: 'YWCA Hanover',State:null,City:null},
        {Name: 'YWCA Hartford Region',State:null,City:null},
        {Name: 'YWCA Helena',State:null,City:null},
        {Name: 'YWCA High Point',State:null,City:null},
        {Name: 'YWCA Kalamazoo',State:null,City:null},
        {Name: 'YWCA Kankakee',State:null,City:null},
        {Name: 'YWCA Knoxville & the Tennessee Valley',State:null,City:null},
        {Name: 'YWCA La Crosse',State:null,City:null},
        {Name: 'YWCA Lake County',State:null,City:null},
        {Name: 'YWCA Lancaster',State:null,City:null},
        {Name: 'YWCA Lewiston, ID-Clarkston, WA',State:null,City:null},
        {Name: 'YWCA Lincoln',State:null,City:null},
        {Name: 'YWCA Lowell',State:null,City:null},
        {Name: 'YWCA Lower Cape Fear',State:null,City:null},
        {Name: 'YWCA Madison',State:null,City:null},
        {Name: 'YWCA Mahoning Valley',State:null,City:null},
        {Name: 'YWCA Malden',State:null,City:null},
        {Name: 'YWCA Mankato',State:null,City:null},
        {Name: 'YWCA Marion County',State:null,City:null},
        {Name: 'YWCA McLean County',State:null,City:null},
        {Name: 'YWCA Metro St. Louis',State:null,City:null},
        {Name: 'YWCA Metropolitan Chicago ',State:null,City:null},
        {Name: 'YWCA Minneapolis',State:null,City:null},
        {Name: 'YWCA Minot',State:null,City:null},
        {Name: 'YWCA Missoula',State:null,City:null},
        {Name: 'YWCA Mohawk Valley',State:null,City:null},
        {Name: 'YWCA Monterey County',State:null,City:null},
        {Name: 'YWCA National Capital Area',State:null,City:null},
        {Name: 'YWCA Nevada',State:null,City:null},
        {Name: 'YWCA New Britain',State:null,City:null},
        {Name: 'YWCA NH ',State:null,City:null},
        {Name: 'YWCA Niagara Frontier',State:null,City:null},
        {Name: 'YWCA North Central Indiana',State:null,City:null},
        {Name: 'ywca north central washington',State:null,City:null},
        {Name: 'YWCA Northcentral PA',State:null,City:null},
        {Name: 'YWCA Northeast Indiana',State:null,City:null},
        {Name: 'YWCA Northeast Kansas',State:null,City:null},
        {Name: 'YWCA Northeastern Massachusetts',State:null,City:null},
        {Name: 'YWCA NorthEastern New York',State:null,City:null},
        {Name: 'YWCA Northwestern Ilinois',State:null,City:null},
        {Name: 'YWCA Oahu',State:null,City:null},
        {Name: 'YWCA of Alexandria-Pineville',State:null,City:null},
        {Name: 'YWCA of Alton',State:null,City:null},
        {Name: 'YWCA of Contra Costa / Sacramento ',State:null,City:null},
        {Name: 'YWCA of Fort Dodge',State:null,City:null},
        {Name: 'YWCA of Genesee County',State:null,City:null},
        {Name: 'YWCA of Greater Atlanta',State:null,City:null},
        {Name: 'YWCA of Hawaii Island',State:null,City:null},
        {Name: 'YWCA of Houston',State:null,City:null},
        {Name: 'YWCA of Kauai',State:null,City:null},
        {Name: 'YWCA of Kitsap County ',State:null,City:null},
        {Name: 'YWCA of Lubbock',State:null,City:null},
        {Name: 'YWCA of Marshalltown, IA',State:null,City:null},
        {Name: 'YWCA of Metro Detroiot',State:null,City:null},
        {Name: 'YWCA of Mount Desert Island',State:null,City:null},
        {Name: 'YWCA of North Orange County DBA: YWCA Orange County',State:null,City:null},
        {Name: 'YWCA of Northwest Louisiana',State:null,City:null},
        {Name: 'YWCA of Oil City',State:null,City:null},
        {Name: 'YWCA of Pekin',State:null,City:null},
        {Name: 'YWCA of Queens',State:null,City:null},
        {Name: 'YWCA of Rochester & Monroe County',State:null,City:null},
        {Name: 'YWCA of San Diego County',State:null,City:null},
        {Name: 'YWCA of San Gabriel Valley',State:null,City:null},
        {Name: 'YWCA of St. Joseph, Missouri',State:null,City:null},
        {Name: 'YWCA of Sweetwater County',State:null,City:null},
        {Name: 'YWCA of Syracuse and Onondaga County Inc.',State:null,City:null},
        {Name: 'YWCA of the City of New York',State:null,City:null},
        {Name: 'YWCA of the Upper Lowlands, Inc.',State:null,City:null},
        {Name: 'YWCA of Van Wert County ',State:null,City:null},
        {Name: 'YWCA OF WESTERN MA',State:null,City:null},
        {Name: 'YWCA of Winston Salem',State:null,City:null},
        {Name: 'YWCA of WSU',State:null,City:null},
        {Name: 'YWCA Oklahoma City',State:null,City:null},
        {Name: 'YWCA Olympia',State:null,City:null},
        {Name: 'YWCA Olympia',State:null,City:null},
        {Name: 'YWCA Orange County',State:null,City:null},
        {Name: 'YWCA Pasadena-Foothill Valley',State:null,City:null},
        {Name: 'YWCA Piqua, Ohio',State:null,City:null},
        {Name: 'YWCA Princeton',State:null,City:null},
        {Name: 'YWCA Pueblo',State:null,City:null},
        {Name: 'YWCA Quad Cities',State:null,City:null},
        {Name: 'YWCA Quincy',State:null,City:null},
        {Name: 'YWCA Rhode Island',State:null,City:null},
        {Name: 'YWCA Richmond (VA)',State:null,City:null},
        {Name: 'YWCA San Antonio',State:null,City:null},
        {Name: 'YWCA San Franciso',State:null,City:null},
        {Name: 'YWCA Sauk Valley',State:null,City:null},
        {Name: 'YWCA Seattle/King/Snohomish',State:null,City:null},
        {Name: 'YWCA Sonoma County',State:null,City:null},
        {Name: 'YWCA South Hampton Roads',State:null,City:null},
        {Name: 'Ywca Southern Arizona',State:null,City:null},
        {Name: 'YWCA Spokane',State:null,City:null},
        {Name: 'YWCA St. Paul',State:null,City:null},
        {Name: 'YWCA Steubenville',State:null,City:null},
        {Name: 'YWCA SWVA and NETN',State:null,City:null},
        {Name: 'YWCA Tri-County Area',State:null,City:null},
        {Name: 'YWCA Tulsa',State:null,City:null},
        {Name: 'YWCA ULSTER COUNTY',State:null,City:null},
        {Name: 'YWCA Union County',State:null,City:null},
        {Name: 'YWCA Utah',State:null,City:null},
        {Name: 'YWCA VT',State:null,City:null},
        {Name: 'YWCA Walla Walla',State:null,City:null},
        {Name: 'YWCA West Central Michigan',State:null,City:null},
        {Name: 'YWCA Western New York',State:null,City:null},
        {Name: 'YWCA Westfield',State:null,City:null},
        {Name: 'YWCA Westmoreland County',State:null,City:null},
        {Name: 'YWCA Wheeling',State:null,City:null},
        {Name: 'YWCA Yonkers',State:null,City:null},
        {Name: 'YWCA York',State:null,City:null},
      ]);
    });
};
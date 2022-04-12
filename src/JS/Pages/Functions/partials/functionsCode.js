
export const code = {
  /* handleObjectChange: <div className="dfc">
      <h4>in component:</h4>
      <div>const [data, setData] = useState(items);</div>
      <br />
      <div>const onChange = handleObjectChange(setData, () => setData([...data]));</div>
      <br />
      <div>const handleArrayChange = (e, index, prop) => {"{"}</div>
      <div>data[index][prop] = e;</div>
      <div>onChange(data);</div>
      {"}"}
      <br />
      <br />
      <div className="mt15">
          <h4>function:</h4> 
          export const handleObjectChange = (updateObject, updateFunction) =>
          (data, prop = '', isNumber) => {"{"}
          <br />
          let value;
          <br />
          if (data?.target) {"{"}
          <br />
          value = data.target.type === 'checkbox' ? data.target.checked : data.target.value;<br />
          {'}'} else value = data;<br />
          <br />
          value = isNumber ? +value : value;<br />
          <br />
          const props = prop.split('.');<br />
          const currentObject = props.reduce((res, chapter, index) => {"{"} <br />
          if (props.length !== index + 1) res = res[chapter];<br />
          return res;<br />
          {"}"}, updateObject);<br />
          <br />
          currentObject[props.pop()] = value;<br />
          updateFunction();<br />
          {"}"};
      </div>
  </div>, */
  handleObjectChange: <pre>
    <code>{`
  IN COMPONENT:

  const [data, setData] = useState(items);

  const onChange = handleObjectChange(setData, () => setData([...data]));

  const handleArrayChange = (e, index, prop) => { //onClick
      data[index][prop] = e;
      onChange(data);
  };

  <div className={cn('accordion', className)}>
      {items?.map((item, index) => {
        const Icon = Icons[item.icon];
        return item.link ? (
          <NavLink key={index} to={item.link} className={cn('main-menu--item main-menu--items-box-title')}>
            {item?.icon && <Icon className={cn('mr5', item?.className)} />}
            <span className={cn({ hidden: !isOpen && !isMenuHovered })}>{item?.title || 'Link'}</span>
          </NavLink>
        ) : (
          <AccordionItem
            key={index}
            className={itemClassName}
            item={item}
            isOpen={item.isOpen}
            onClick={(e) => handleArrayChange(e, index, 'isOpen')}
          />
        );
      })}
    </div>


  FUNCTION:

  export const handleObjectChange = (updateObject, updateFunction) => (data, prop = '', isNumber) => {
    let value;
    if (data?.target) {
      value = data.target.type === 'checkbox' ? data.target.checked : data.target.value;
    } else value = data;
		
    value = isNumber ? +value : value;
		
    const props = prop.split('.');
    const currentObject = props.reduce((res, chapter, index) => {
      if (props.length !== index + 1) res = res[chapter];
      return res;
    }, updateObject);
		
    currentObject[props.pop()] = value;
    updateFunction();
  };`
    }
    </code>
  </pre>,

  compare: <pre><code>{`
DESCRIPTION: Compare 2 arrays or objects.

IN COMPONENT:

  compare(arr, arr2);


FUNCTION:

  export const compare = (a, b, keys = []) => {
    if ((Array.isArray(a), Array.isArray(b))) return JSON.stringify(a?.sort?.()) === JSON.stringify(b?.sort?.());
    else if (Array.isArray(a) || Array.isArray(b)) throw new Error('Different types detected!');
    return JSON.stringify(Object.entries(omitKeys(a, keys)).sort?.()) === JSON.stringify(Object.entries(omitKeys(b, keys)).sort?.());
  };`}</code>
  </pre>,

  getQueryParams: <pre><code>{`
DESCRIPTION: Add query to url.

IN COMPONENT:

  () => {
    restApi.send({
      path: definePathWithQuery(scheme, form), //scheme-string, data-array
      method: 'GET',
    }).then((res) => {
      if (res?.ok) {
        try {
          res.text().then((item) => item && GeneralStore.set(JSON.parse(item).rows, scheme, 'itemsList', 'rows'));
        } catch {
          return { ok: true };
        }
      } else toast.error('Something wrong, try again...');
    });
  },
  

FUNCTION:

  export const getQueryParams = params => Object.entries(params)
    .map(([key, value]) => value && \`filter[\${key}]=\${value}\`)
    .filter(el => el)
    .join('&')
    .replace(/^(?=.)/, '?');
		
  export const definePathWithQuery = (scheme, data) => { //scheme-string, data-array
    let queryObj = data.reduce((acc, el) => ({ ...acc, [el.key === 'state' ? 'address_state' : el.key]: el.item.value || '' }), {});
    return \`\${scheme}\${getQueryParams(queryObj)}\`
  }
	`}</code></pre>,

  clone: <pre><code>{`
DESCRIPTION: Deep clone array or object.

IN COMPONENT:

  useEffect(() => {
    setForm(clone(fields));
  }, fields);

  
FUNCTION:

  export const clone = obj => {
    const data = obj instanceof Array ? [] : {};
    for (const i in obj) data[i] = typeof obj[i] === 'object' && obj[i] != null ? clone(obj[i]) : obj[i];
    return data;
  };
  `}</code></pre>,

  validation: <pre><code>{`
IN COMPONENT:
  if (!ValidateFormsByConstructor(constructorItem, data)) {
    setConstructorItem({ ...constructorItem });
    return null;
  }

FUNCTION:
  const CheckWebsite = value => {
    const rule = /^https?:\\/\\/(www\\.)?(?!\\.)([^\\.\\/]{2,256}|\\.(?!\\.))+(?<!\\.)(\\/.*)*$/g;
    //const rule = /(http(s)?:\\/\\/.)(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g;
      if (!rule.test(value.toLowerCase())) {
          return false;
    }

    return true;
  };

  const CheckEmail = value => {
    const rule = /^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;
    if (value.match('^[a-zA-Z ]*$') != null) return rule;
    return rule.test(value.toLowerCase());
  };

  const checkDate = /^(0?[1-9]|1[012])[\\.\\-](0?[1-9]|[12][0-9]|3[01])[\\.\\-]\\d{4}$/; //mm.dd.yyyy

  const ValidateFormsByConstructor = (constructor, data) => {
    let isValid = true;
    function checkField(field) {
      if(field.item?.isRequired && !data[field.key]) {
        isValid = false;
        field.item?.error = 'Required field';
      }
      else if (field.key === 'websiteUrl') {
        isValid = CheckWebsite(field.item.value);
        !isValid ? field.item.error = 'Website address is not valid' : null;
      }
      else if (field.key === 'email') isValid = CheckEmail(typeof field.item.value === 'string' ? field.item.value : field.item.value.value);
      if(field.isRequired && field.type === 'checkboxes' && !data[field.key].length) {
        isValid = false;
        field.error = 'Required field';
      }
    };
  
    if(constructor.type === 'form') {
      constructor.fields.map(field => checkField(field))
    }
  
    return isValid;
  }


  EXAMPLE PROPS:
   constructor:
  `}</code></pre>,

  validationUni:
    <pre>
      <code>
        {
          `
        FUNCTION:
       
        export const checkField = (value, key, values) => {
          let error = '';
        
          if (!value) return error = 'Required field';
          else if (key === 'email' && !CheckEmail(value)) return error = 'Invalid email';
          else if (key === 'website' && !CheckWebsite(value)) return error = 'Invalid website';
          else if ((
            key === 'mobileNumber'
            || key === 'mobilePhone'
            || key === 'phoneNumber'
            || key === 'employerPhone'
          ) && !CheckPhone(value)) return error = 'Invalid phone number';
          else if (key === 'confirmSsn') {
            values?.ssn != value ? error = \`SSN doesn't match\` : ''
          }
          return error;
        }
        
        export const validate = (values, constructor) => Object.keys(values).every(key => {
          const field = constructor.find(el => el.key === key);
          return field?.required ? !checkField(values[key], key, values) : true
        });
  
        IN COMPONENT:
  
        const [isTouched, setIsTouched] = useState(false);
  
        send: () => {
          setIsTouched(true);
          validate(data, fields) && restApi
            .send({
              path: \`applications/'$'{id}'\`,
              method: 'PATCH',
              body: ExportTransformer('applicationSteps', data),
              successMess: 'Success'
            })
            .then(res => {
              if (res.ok) {
                setUncompletedTabName('');
                setActiveTab('employerInfo');
              }
              else toast.error('Something went wrong...');
            });
        },
  
  
        {fields?.map(field => {
          return (
            <FormItem
              values={data ?? {}}
              key={field.key}
              field={{
                ...field,
                value: data?.[field.key],
                error: field.required ? isTouched && checkField(data[field.key], field.key, data) : ''
              }}
              onChange={(e, key) => handle.change(e, key)}
            />
          );
        })}
  
  
        EXAMPLE PROPS:
  
        fields: [
          {
            key: 'firstName',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'First Name',
            placeholder: 'First Name',
            required: true,
          },
          {
            key: 'language',
            type: 'radioAsButton',
            className: 'application--item col-12 col-sm-6 col-lg-4',
            label: 'Language',
            leftBtn: {
              key: 'english',
              label: 'English',
            },
            rightBtn: {
              key: 'spanish',
              label: 'Spanish',
            },
          },
          {
            key: 'residenceOwnershipType',
            type: 'radioAsButton',
            className: 'application--item col-12 col-sm-6 col-lg-4',
            label: 'Residence ownership type',
            leftBtn: {
              key: 'rent',
              label: 'Rent',
            },
            rightBtn: {
              key: 'own',
              label: 'Own',
            },
          },
          {
            key: 'lastName',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'Last Name',
            placeholder: 'Last Name',
            required: true,
          },
          {
            key: 'licenseNumber',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'License Number',
            placeholder: 'X1122333',
            required: true,
          },
          {
            key: 'zip',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'ZIP',
            placeholder: 'ZIP',
            required: true,
            mask: '99999',
          },
          {
            key: 'mobilePhone',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'Mobile Phone',
            icon: <Smartphone />,
            placeholder: 'Mobile Phone',
            required: true,
            mask: '999 999 9999',
          },
          {
            key: 'driverLicenseState',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'Driver License State',
            placeholder: 'State',
            required: true,
          },
          {
            key: 'checkZip',
            type: 'checkZip',
            className: 'application--item application__personal-info--alert col-12 col-md-6 col-lg-4',
          },
      
          {
            key: 'homePhone',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'Home(Alternate) Phone (Optional)',
            icon: <Phone />,
            placeholder: 'Alternate Phone',
            mask: '999 999 9999',
          },
          {
            key: 'ssn',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'Social Security Number or ITIN',
            placeholder: '123 45 6789',
            required: true,
          },
          {
            key: 'streetAddress',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'Street Address',
            placeholder: 'Street Address',
            required: true,
          },
          {
            key: 'email',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'Email',
            placeholder: 'example@domain.com',
            required: true,
          },
          {
            key: 'confirmSsn',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'Confirm Social Security Number or ITIN',
            placeholder: '123 45 6789',
            required: true,
          },
          {
            key: 'timeAtAddress',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            isNumeric: true,
            label: 'Time at the address (months)',
            min: 1,
            required: true,
          },
          {
            key: 'birthdate',
            type: 'input',
            className: 'application--item col-12 col-md-6 col-lg-4',
            label: 'Birthdate (mm.dd.yyyy)',
            required: true,
          },
          {
            key: 'emptySpace',
            type: 'emptySpace',
            className: 'applications__empty-space col-lg-8',
          },
          {
            key: 'phoneDisclosure',
            type: 'radioAsButton',
            className: 'application--item application--item-phone col-12 col-sm-6 col-lg-4',
            label: 'Phone Disclosure',
            leftBtn: {
              key: 'agree',
              label: 'Agree',
            },
            rightBtn: {
              key: 'disagree',
              label: 'Disagree',
            },
          }
        ];
  
        data: {
          "firstName": "John",
          "language": "english",
          "residenceOwnershipType": "rent",
          "lastName": "Silver",
          "licenseNumber": "23131241",
          "zip": "222222",
          "mobilePhone": "21412412",
          "driverLicenseState": "VA",
          "homePhone": "34234234",
          "ssn": "23523523523253",
          "streetAddress": "Main street 22",
          "email": "silverhand@cyber.com",
          "confirmSsn": "23523523523253",
          "timeAtAddress": 22,
          "birthdate": "16.11.88",
          "phoneDisclosure": "agree",
          "incomeSource": "jobIncome",
          "jobTitle": "Job title",
          "getPaid": "every2weeks",
          "currentEmployer": "Young @ Heart",
          "startDate": "05.05.2018",
          "lastPayDate": "05.05.2019",
          "employerPhone": "(307) 555-0133",
          "grossMonthlyIncome": 1000,
          "nextPayDate": "18.01.2020",
          "requestedAmount": "",
          "productName": ""
        }
        `
        }
      </code>
    </pre>,

  checkEmptyFields: <pre>
    <code>
      {
        `
DESCRIPTION: Get tab name by first unfilled field in tabs 

IN COMPONENT:

getUnfilledFieldTabName(res, initialData)


FUNCTION:

export const getUnfilledFieldTabName = (data, initialData) => {
  const initialDataKeys = Object.keys(initialData);
      
  return initialDataKeys.reduce((acc, item, index) => {
    const checkKeys = Object.keys(initialData[item]).reduce((acc2, el) => acc2 && !!data[el], true);
      
    if (acc.next) {
      return !checkKeys ? { next: false, result: item } : { next: true, result: initialDataKeys[index + 1] || null };
    };
      
    return acc;
  }, { next: true, result: initialDataKeys[0] }).result;
}


EXAMPLE PROPS:

res: {
  "firstName": "John",
  "language": "english",
  "residenceOwnershipType": "rent",
  "lastName": "Silver",
  "licenseNumber": "23131241",
  "zip": "222222",
  "mobilePhone": "21412412",
  "driverLicenseState": "VA",
  "homePhone": "34234234",
  "ssn": "23523523523253",
  "streetAddress": "Main street 22",
  "email": "silverhand@cyber.com",
  "confirmSsn": "23523523523253",
  "timeAtAddress": 22,
  "birthdate": "16.11.88",
  "phoneDisclosure": "agree",
  "incomeSource": "jobIncome",
  "jobTitle": "Job title",
  "getPaid": "every2weeks",
  "currentEmployer": "Young @ Heart",
  "startDate": "05.05.2018",
  "lastPayDate": "05.05.2019",
  "employerPhone": "(307) 555-0133",
  "grossMonthlyIncome": 1000,
  "nextPayDate": "18.01.2020",
  "requestedAmount": "",
  "productName": ""
},

initialData: {
  personalInfo: {
    firstName: '',
    language: 'english',
    residenceOwnershipType: 'rent',
    lastName: '',
    licenseNumber: '',
    zip: '',
    mobilePhone: '',
    driverLicenseState: '',
    homePhone: '',
    ssn: '',
    streetAddress: '',
    email: '',
    confirmSsn: '',
    timeAtAddress: 1,
    birthdate: '',
    phoneDisclosure: 'agree',
  },
  employerInfo: {
    incomeSource: '',
    jobTitle: '',
    getPaid: '',
    currentEmployer: '',
    startDate: '',
    lastPayDate: '',
    employerPhone: '',
    grossMonthlyIncome: '',
    nextPayDate: '',
  },
  sendToCustomer: {}
}
        `
      }
    </code>
  </pre>,

  calculateTableCell: <pre>
    <code>
      {
        `
DESCRIPTION: Calculate table cells by value. https://i.imgur.com/TaScp0h.png

IN COMPONENT:

<Status
  type={item?.status.type}
  value={item?.status.value}
  status={item?.status.status}
  active={calculateTableCell()?.active}
  pause={calculateTableCell()?.pause}
/>

FUNCTION:

const calculateTableCell = () => {
  return item?.rows?.reduce(
    // sum rows
    (acc, row) => {
      const result = row.cols.reduce(
        // sum cols
        (accum, col) => ({
          active: accum.active + (col.status === 'active' ? 1 : 0),
          pause: accum.pause + (col.status === 'pause' ? 1 : 0),
        }),
        { active: 0, pause: 0 },
      );
    
      return {
        // rows result + cols result
        active: acc.active + result.active,
        pause: acc.pause + result.pause,
      };
    },
    { active: 0, pause: 0 },
  );
};
      `
      }
    </code>
  </pre>,

  getClosedAccordionBodyHeight: <pre>
    <code>
      {
        `
IN COMPONENT:

const AccordionItem = ({ item, onClick, isOpen, className, children, noChevron }) => {
const [maxHeight, setMaxHeight] = useState(0);
const ref = useRef(null);

const getItemsHeight = () => {
  let itemHeight = 0;
  ref.current.childNodes.forEach(el => {
    itemHeight += el.offsetHeight;
  });
    
  return itemHeight + 20;
};

useEffect(() => {
  setMaxHeight(isOpen ? getItemsHeight() : 0);
}, [isOpen]);

return <div ref={ref} style={{ maxHeight }} className={cn({ 'accordion--content-is-open': isOpen })}>
  Content
</div>
}
      `
      }
    </code>
  </pre>,

  omitKeys: <pre>
    <code>
      {`
    DESCRIPTION: Delete elem from object by keys.

    FUNCTION:

    export const omitKeys = (input, keys = []) => {
      if (input === null || typeof input !== 'object') return input;
      keys.reduce((acc, key) => {
        const { [key]: omit, ...rest } = acc;
        return rest;
      }, input)
    };
    `}
    </code>
  </pre>,

  getQueryString: <pre>
    <code>
      {`
    export const getQueryString = input => {
      let params;
      if (Array.isArray(input)) {
        params = input;
      } else if (typeof input === 'object') {
        params = Object.keys(input).filter(key => input[key]).map(key => \`'$'{key}='$'{input[key]}\`);
      } else if (typeof input === 'string') return input;
      else return '';
    
      return params.length ? '?' + params.join('&') : '';
    };
    `}
    </code>
  </pre>,
  getQueryParamsFromUrl: <pre>
    <code>
      {`
    DESCRIPTION: Make object from query string.

    FUNCTION:

    export const getQueryParamsFromUrl = (url = String.prototype) => {
      if (url && typeof url === 'string') {
        return decodeURI(url).split('?')[1].split('&').reduce((acc, item) => {
          const queryItem = item.split('=');
          return {
            ...acc,
            [queryItem[0]]: queryItem[1]
          }
        }, {});
      } else return null;
    };
    `}
    </code>
  </pre>,

  getQueryObj: <pre>
    <code>
      {`
    export const getQueryObj = (obj, nested) => {
      const { filter, ...rest } = obj || toJS(nested ? PSStore.queryForNestedList[nested] : PSStore.query);
      const DEFAULT = nested ? DEFAULT_QUERY_VALUES_FOR_NESTED_LIST : DEFAULT_QUERY_VALUES;
    
      const queryObj = REQUIRED_QUERY_KEYS.reduce((acc, key) => ({ ...acc, [key]: rest[key] ?? DEFAULT[key] }), {});
      let filtersObj = {};
      if (!nested) filtersObj = Object.keys(filter || {})
        .filter((key) => filter[key])
        .reduce((acc, key) => ({ ...acc, [\`filter['$'{key}]\`]: filter[key] }), {});
    
      return { ...queryObj, ...filtersObj };
    };
    `}
    </code>
  </pre>,

  getStoreQueryObj: <pre>
    <code>
      {`
    export const getStoreQueryObj = (obj, nested) => {
      const { page, perPage, sort, direction, ...rest } = obj || {};
      const filterObj = Object.keys(rest)
        .filter(key => !!key && !!rest[key])
        .reduce((acc, key) => ({ ...acc, [key.split('[')[1]?.split(']')[0]]: rest[key] }), {});
      const queryValues = { page, perPage, sort, direction };
      const queryObj = Object.keys(queryValues).reduce((acc, key) => ({ ...acc, [key]: queryValues[key] || DEFAULT_QUERY_VALUES[key] }), {})
      return { ...queryObj, ...(!nested ? { filter: filterObj } : {}) }
    };
    `}
    </code>
  </pre>,

  getUrl: <pre>
    <code>
      {`
    export const getUrl = (scheme, prop, value, nested) => {
      if (scheme === '/' || scheme === 'ping-tree') return scheme;
    
      const { filter = {}, ...rest } = nested ? getQueryObj(null, nested) : getQueryObj();
      let base;
      let notBase;
      const DEFAULT = nested ? DEFAULT_QUERY_VALUES_FOR_NESTED_LIST : DEFAULT_QUERY_VALUES;
    
      if (!prop) {
        const query = getQueryString({ ...rest, ...filter })
        return \`/'$'{scheme}'$'{query}\`
      }
      else if (prop === 'newPage') {
        base = { ...DEFAULT };
        notBase = filter;
      }
      else if (Object.keys(rest).includes(prop)) {
        base = { ...rest, [prop]: value || DEFAULT[prop] };
        notBase = filter;
      }
      else if (Object.keys(filter).includes(prop)) {
        base = { ...filter, [prop]: value };
        notBase = rest;
      }
      else if (prop === 'query' || prop === 'queryForNestedList') {
        base = Object.keys(rest).reduce((ac, key) => ({ ...ac, [key]: value[key] || DEFAULT[key] }), {});
        notBase = filter;
      }
      const query = getQueryString({ ...base, ...notBase });
    
      return \`/'$'{scheme}'$'{query}\`
    }
    `}
    </code>
  </pre>,

  useOutsideToggle: <pre>
    <code>
      {`
    DESCRIPTION: Close dropdown by click outside.

    IN COMPONENT:
    const userMenu = useRef(null);
    const [isLinksListOpen, setIsLinksListOpen] = useState(false);

    closeLinksList: () => setIsLinksListOpen(false),

    useOutsideToggle(userMenu, handle.closeMenu);

    <div className="header__links-list-dropdown" ref={linksList}>
    {links.map(({ key, link, title, className }) => (
      link &&
      <NavLink
        key={key}
        onClick={handle.closeLinksList}
        className={cn('header__links-list-dropdown__item', { 'header__links-list-dropdown__item-active': location.pathname.includes(key) }, className)}
        to={link}
      >
        {location.pathname.includes(key) && <Check className="header__links-list-dropdown__item-active--icon" />}
        {Lng(title)}
      </NavLink>
    ))}
  </div>

    FUNCTION:

    export const useOutsideToggle = (ref, setOut, open) => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOut(open);
        }
      }
    
      useEffect(() => {
        document.addEventListener('mouseup', handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener('mouseup', handleClickOutside);
        };
      }, [ref]);
    };
    `}
    </code>
  </pre>,

  formFieldsByOrder: <pre>
    <code>
      {`

    FUNCTION:
    export const formFieldsByOrder = (data, order) => {
      return order.map(el => data[el]);
    };

    IN COMPONENT:
    const fieldsOrder = constructor.fieldsOrder[activeTab];
    
    fieldsOrder.map((column, colIndex) => {
      return (
        <div
            key={colIndex}
            className={\`col--big col-12 col-sm-6 '$'{
              colIndex === 2 ? 'col-md-6' : 'col-md-6'
            } col-xl-4 consumer-form__column-'$'{colIndex}\`}
          >
            <div className="row">
              {column.map(fieldKey => {
                return (
                  <FormItem key={fieldKey} field={form[fieldKey]} onChange={onChange} values={values} setForm={setForm} />
                );
              })}
            </div>
          </div>

    EXAMPLE PROPS:
    fieldsOrder: {
      personalInfo: [
        ['firstName', 'lastName', 'mobilePhone', 'homePhone', 'email', 'birthdate'],
        ['language', 'licenseNumber', 'driverLicenseState', 'ssn', 'confirmSsn'],
        ['residenceOwnershipType', 'zip', 'checkZip', 'streetAddress', 'timeAtAddress'],
        ['phoneDisclosure', 'agree'],
      ],
      employerInfo: [
        ['incomeSource', 'currentEmployer', 'employerPhone'],
        ['jobTitle', 'startDate', 'grossMonthlyIncome'],
        ['getPaid', 'lastPayDate', 'nextPayDate'],
      ],
      sendUrl: [],
    },

    `}
    </code>
  </pre>,

  addKeyPressEvent: <pre>
    <code>
      {`
    export const KEY_CODE = Object.freeze({ ENTER: 13, ESC: 27 });
    
     const handle = {
      confirm: (e) => {
        e.preventDefault();
        onConfirm();
      },
      pressEnter: (event) => {
        if (event.keyCode === KEY_CODE.ENTER && !event.repeat) handle.confirm(event);
      },
    };
    
     useEffect(() => {
      document.addEventListener('keydown', handle.pressEnter);
      return () => document.removeEventListener('keydown', handle.pressEnter);
    }, []);
    `}
    </code>
  </pre>,

  redirect: <pre>
    <code>
      {`
    import { Redirect } from "react-router-dom";
    import PageNotFound from './JS/Pages/PageNotFound/PageNotFound';
    
    export const routes = [
      { id: 'pageNotFound', path: '/page-not-found', exact: true, component: PageNotFound },
      {path: '*', component: () => <Redirect to="/page-not-found" /> }
    ];
    `}
    </code>
  </pre>,

  scrollToFirstFieldWithError: <pre>
    <code>
      {`
    FUNCTION:

    export const scrollToFirstFieldWithError = (errorKeys, ref) => {
      if (errorKeys.length) {
        const fieldsWithError = errorKeys.map(key => ref.current.querySelector(\`[data-key='$'{key}]\`));
        const getFirstFieldWithError = fieldsWithError.reduce(
          (acc, item) => (acc === null || item.getBoundingClientRect().top < acc ? item : acc),
          null,
        );
        getFirstFieldWithError.scrollIntoView({ alignToTop: true, block: 'center', behavior: 'smooth' });
      }
    };

    IN COMPONENT: 

    const [errorKeys, setErrorKeys] = useState([]);
    const ref = useRef();

    const handle = {
      save: () => {
        onSave();
        setErrorKeys(Object.values(form).filter(field => field.error).map(el => el.key));
      },
    }
    useEffect(() => {
      scrollToFirstFieldWithError(errorKeys, ref);
    }, [errorKeys]);

    <div ref={ref} className="row row--big">{renderFields()}</div> //FormItem

    //FormItem:
    <FormElement label={label} required={required} error={error} className={className} hint={hint}>
      <div data-key={key} className="w100">
        {renderInner()}
      </div>
    </FormElement>

    EXAMPLE PROPS:
    form: {
      ...,
      firstName: {
        className: "application--item col-12 input_gray"
        error: "Required field"
        key: "firstName"
        label: "First Name"
        placeholder: "First Name"
        required: true
        value: ""
      },
      ...
    }

    `}
    </code>
  </pre>,

  animatedScrollTo: <pre>
    <code>
      {`
      DESCRIPTION: 
      Scroll to first field with received params 

      FUNCTION:

      export const animatedScrollTo = (targetClassName, containerName, containerSearchType = 'className', offset = 0) => {
        const container = document.querySelector(\`[name='$'{containerName}]\`) || document;
        let element;
        switch (containerSearchType) {
          case 'className':
            element = container.getElementsByClassName(targetClassName)[0];
            break;
          case 'tag':
            element = container.getElementsByTagName(targetClassName)[0];
            break;
          case 'id':
            element = container.getElementById(targetClassName);
            break;
          default: element = container.querySelector(\`['$'{containerSearchType}='$'{targetClassName}]\`)[0];
        }
      
        element.style.transform = \`translateY(-'$'{offset}px)\`;
        element.scrollIntoView({ behavior: 'smooth' });
        element.style.transform = 'translateY(0)';
      };

      IN COMPONENT: 

      const handle = {
        save: () => {
          onSave();
          setTimeout(() => animatedScrollTo('input__wrap_error', 'page-container', 'className', 20), 0);
        },
      };

      PROPS: 
      targetClassName - className искомого элемента(например "input__wrap_error")
      containerSearchType - тип искомого элемента
      containerName - атрибут искомого элемента(name, id и тд.)(элемент должен быть скроллируемым)
      offset - отступ сверху до элемента после скролла
      `}
    </code>
  </pre>,

formatPriceInput: <pre>
  <code>
    {`

    FUNCTION:

    // format from 1000000000 to $1000,000,000
    export const formatPriceInput = value => {
      //содержит ли value точку
      const isFraction = value.includes('.');
    
      //взять строку до точки
      const valueBeforeDot = isFraction ? value.slice(0, value.indexOf('.')) : value;
    
      //расстановка запятых после каждой 3й цифры с конца
      const intPart = valueBeforeDot
        .split('')
        .reverse()
        .reduce((acc, item, idx) => (idx % 3 === 0 && idx !== 0 ? [...acc, ',', item] : [...acc, item]), [])
        .reverse()
        .join('');
    
      return isFraction ? intPart + value.slice(value.indexOf('.')) : intPart;
    };
    
    // format from 100.45345345 to 100.45
    export const twoDigitAfterDot = value => {
      if (value.includes('.')) {
        const valueAfterDot = value.slice(0, value.indexOf('.') + 3);
        return valueAfterDot;
      } else {
        return value;
      }
    };

    IN COMPONENT: 

    formatPriceInput(value)
    `}
  </code>
</pre>,

phoneNumberHyphen: <pre>
  <code>
    {`
    STRING: 5554443333

    REGEXP: string.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    
    RESULT: 555-444-3333
    `}
  </code>
</pre>,

defineBoxPositionByScreen: <pre>
  <code>
    {`
    FUNCTION:

    export const defineBoxPositionByScreen = (ref) => {
      const elemRightPosition = ref.current.getBoundingClientRect().right;
      const elemBottomPosition = ref.current.getBoundingClientRect().bottom;
      const screenWidth = document.documentElement.clientWidth;
      const screenHeight = document.documentElement.clientHeight;
    
      if (elemRightPosition > screenWidth && elemBottomPosition < screenHeight) {
        return 'left';
      } else if (elemBottomPosition > screenHeight && elemRightPosition < screenWidth) {
        return 'top';
      } else if (elemRightPosition > screenWidth && elemBottomPosition > screenHeight) {
        return 'top-left';
      }
    };

    IN COMPONENT:
    const boxRef = useRef();
    const [elemPosition, setElemPosition] = useState('');

    useLayoutEffect(() => {
      setElemPosition(defineBoxPositionByScreen(boxRef))
    }, []);

    <div className={cn({[\`opened-part--\${elemPosition}\`]: elemPosition})} ref={boxRef}> 
      Text
    </div>
    `}
  </code>
</pre>,

formatPhone: <pre>
  <code>
    {`
    //format phone number from '5554443333' to '555 444 3333'
    export const formatPhone = (value) => value.replace(/(\d{3})\D?(\d{3})\D?(\d{4})/,"$1 $2 $3");
    `}
  </code>
</pre>,
copyToClipboard: <pre>
  <code>
    {`
   PROPS: string/number/object/array

   FUNCTION:

   export const copyToClipboard = (value = '') => {
    const transformedString = JSON.stringify(value)
      .replace(/,/g, ',\\n  ')
      .replace(/{/g, '{\\n  ')
      .replace(/}/g, '\\n}')
      .replace(/},/g, '  },')
  
    if (typeof value === 'string') return navigator.clipboard.writeText(value);
    else return navigator.clipboard.writeText(transformedString);
  };

  IN COMPONENT:

  copyToClipboard({ a: 'test', b: 'test 2' })
   `}
  </code>
</pre>,

}
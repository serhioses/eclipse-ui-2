'use strict';

import eclipse from 'eclipse';

import Bundle from './lib/bundle';
import Search from './lib/search';
import Spinner from './lib/spinner';
import Dropdown from './lib/dropdown';
import {StaticTabs, ResponsiveTabs} from './lib/tabs';

eclipse.utils.namespace('UI');

eclipse.UI.Bundle = Bundle;
eclipse.UI.Search = Search;
eclipse.UI.Spinner = Spinner;
eclipse.UI.Dropdown = Dropdown;
eclipse.UI.StaticTabs = StaticTabs;
eclipse.UI.ResponsiveTabs = ResponsiveTabs;
